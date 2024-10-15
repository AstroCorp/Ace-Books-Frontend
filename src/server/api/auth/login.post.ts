import { SessionResponse } from "~/types/auth";

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const body = await readBody(event);

	console.log('login fetch: ' + config.public.backendUrl + '/auth/login');

	// recorremos los valores de process.env y los mostramos en consola junto con su valor
	for (const key in process.env) {
		if (Object.prototype.hasOwnProperty.call(process.env, key)) {
			const element = process.env[key];
			console.log(key + ' = ' + element);
		}
	}

	const response = await $fetch<SessionResponse>(config.public.backendUrl + '/auth/login', {
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
