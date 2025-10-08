export default defineNuxtRouteMiddleware(async (to, from) => {
	const hasTokenParam = typeof to.query.token === 'string' && to.query.token.length > 0;
	const hasEmailParam = typeof to.query.email === 'string' && to.query.email.length > 0;

	// Si no tiene los parámetros necesarios, redirige a la página principal
	if (!hasTokenParam || !hasEmailParam) {
		return navigateTo('/');
	}
});
