import useJwt from "~/composables/useJwt";
import { SessionResponse } from "~/types/auth";

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const body = await readBody(event);
	const { extractTokenData } = useJwt();

	const response = await $fetch<SessionResponse>(config.nuxtBackendUrl + '/auth/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Origin': event.headers.get('origin') ?? '',
		},
		body: JSON.stringify({
			email: body.email,
			password: body.password,
		}),
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

	return {
		success: true,
	};
});
