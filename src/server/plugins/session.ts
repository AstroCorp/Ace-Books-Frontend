import useJwt from "~/app/composables/useJwt";
import type { SessionResponse } from "~/types/auth";

export default defineNitroPlugin(() => {
	const config = useRuntimeConfig();
	const { extractTokenData } = useJwt();

	// Se ejecuta al comprobar la sesión al usar SSR desde el composable (/api/_auth/session)
	// o al usar useUserSession().fetch()
	sessionHooks.hook('fetch', async (session, event) => {
		const accessTokenData = extractTokenData(session.access_token);
		const refreshTokenData = extractTokenData(session.refresh_token);

		// Date.now() es en milisegundos y exp en segundos,
		// por eso se multiplica por 1000
		const accessTokenIsExpired = Date.now() >= accessTokenData.exp * 1000;
		const refreshTokenIsExpired = Date.now() >= refreshTokenData.exp * 1000;

		const tokensAreExpired = accessTokenIsExpired && refreshTokenIsExpired;
		const tokensNeedRefresh = accessTokenIsExpired && !refreshTokenIsExpired;

		// Si los tokens están expirados cerramos la sesión
		if (tokensAreExpired) {
			await clearUserSession(event);
		}

		// Si solo el token de acceso está expirado y el de refresco no, refrescamos los tokens
		if (tokensNeedRefresh) {
			try {
				const response = await $fetch<SessionResponse>(config.public.backendUrl + '/auth/refresh', {
					method: 'POST',
					headers: {
						'Origin': event.headers.get('origin') ?? '',
						Authorization: 'Bearer ' + session.refresh_token,
					},
				});

				const tokenData = extractTokenData(response.access_token);

				await replaceUserSession(event, {
					user: {
						userId: tokenData.userId,
						isAdmin: tokenData.isAdmin,
						isVerified: tokenData.isVerified,
					},
					access_token: response.access_token,
					refresh_token: response.refresh_token,
				}, {
					maxAge: Number(config.nuxtSessionTime),
				});
			} catch (error) {
				await clearUserSession(event);
			}
		}
	});
});
