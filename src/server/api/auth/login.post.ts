import { SessionResponse } from "~/types/auth";

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const body = await readBody(event);

	console.log('login fetch: ' + config.public.backendUrl + '/auth/login');

	const response = await $fetch<SessionResponse>(config.public.backendUrl + '/auth/login', {
		method: 'POST',
		body: JSON.stringify({
			email: body.email,
			password: body.password,
		}),
	});

	console.log('login response: ' + JSON.stringify(response));

	await replaceUserSession(event, {
		user: {
			email: response.user.email,
			avatar: response.user.avatar,
			isAdmin: response.user.isAdmin,
			isVerified: response.user.isVerified,
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
