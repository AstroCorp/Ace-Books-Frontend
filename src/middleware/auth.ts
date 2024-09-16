export default defineNuxtRouteMiddleware(async (middleware) => {
	const nuxtApp = useNuxtApp();
	const localeRoute = useLocaleRoute();
	const { loggedIn, fetch, session, clear } = useUserSession();
	const { extractTokenData } = useJwt();

	// Si el usuario está logueado, comprueba si los tokens están expirados o necesitan ser renovados
	if (loggedIn.value) {
		const accessTokenData = extractTokenData(session.value.access_token);
		const refreshTokenData = extractTokenData(session.value.refresh_token);

		// Date.now() es en milisegundos y exp en segundos,
		// por eso se multiplica por 1000
		const accessTokenIsExpired = Date.now() >= accessTokenData.exp * 1000;
		const refreshTokenIsExpired = Date.now() >= refreshTokenData.exp * 1000;

		const tokensAreExpired = accessTokenIsExpired && refreshTokenIsExpired;
		const tokensNeedRefresh = accessTokenIsExpired && !refreshTokenIsExpired;

		if (tokensAreExpired) {
			await clear();
		}

		if (tokensNeedRefresh) {
			await fetch();
		}
	}

	// Si el usuario no está logueado, lo redirige al login
	if (!loggedIn.value) {
		const loginRoute = localeRoute('login', nuxtApp.$i18n.locale);
		const loginPath = loginRoute != null ? loginRoute.path : '/';

		return navigateTo(loginPath);
	}
});
