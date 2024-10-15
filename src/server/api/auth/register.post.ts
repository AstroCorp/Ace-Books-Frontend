import { SessionResponse } from "~/types/auth";

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const body = await readBody(event);

	console.log('register fetch: ' + config.public.backendUrl + '/auth/register');

	const response = await $fetch<SessionResponse>(config.public.backendUrl + '/auth/register', {
		method: 'POST',
		body: JSON.stringify({
			email: body.email,
			password: body.password,
		}),
	});

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
