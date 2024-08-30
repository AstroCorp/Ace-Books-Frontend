import { LoginResponse } from "~/types/auth";

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const body = await readBody(event);

	const response = await $fetch<LoginResponse>(config.public.backendUrl + '/auth/login', {
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
	});
});
