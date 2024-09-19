export default defineNuxtRouteMiddleware(async (middleware) => {
	const nuxtApp = useNuxtApp();
	const localeRoute = useLocaleRoute();
	const { loggedIn } = useUserSession();

	// Si el usuario no está logueado, lo redirige al login
	if (!loggedIn.value) {
		const loginRoute = localeRoute('login', nuxtApp.$i18n.locale.value);
		const loginPath = loginRoute != null ? loginRoute.path : '/';

		return navigateTo(loginPath);
	}
});
