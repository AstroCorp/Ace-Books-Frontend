export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const body = await readBody(event);
	const session = await getUserSession(event);

	// Si el usuario ya está verificado, evitamos hacer la llamada al backend
	if (session.user && session.user.isVerified) {
		return {
			success: true,
		};
	}

	await $fetch(`${config.public.backendUrl}/users/verify-account?expires=${body.expires}&signature=${body.signature}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Origin': event.headers.get('origin') ?? '',
		},
		body: {
			email: body.email,
			hash: body.hash,
		},
	});

	// Si tiene sesión, actualizamos la sesión para reflejar que el usuario ya está verificado
	if (session.user) {
		await replaceUserSession(event, {
			user: {
				userId: session.user.userId,
				isAdmin: session.user.isAdmin,
				isVerified: true,
			},
			access_token: session.access_token,
			refresh_token: session.refresh_token,
		}, {
			maxAge: Number(config.nuxtSessionTime),
		});
	}

	return {
		success: true,
	};
});
