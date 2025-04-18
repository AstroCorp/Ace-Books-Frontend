export default defineNuxtRouteMiddleware(async (middleware) => {
	const nuxtApp = useNuxtApp();
	const localeRoute = useLocaleRoute();
	const { loggedIn } = useUserSession();

	// Si el usuario está logueado, lo redirige a su biblioteca
	if (loggedIn.value) {
		const libraryRoute = localeRoute('library', nuxtApp.$i18n.locale.value);
		const libraryPath = libraryRoute != null ? libraryRoute.path : '/';

		return navigateTo(libraryPath);
	}
});
