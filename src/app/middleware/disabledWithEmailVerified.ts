export default defineNuxtRouteMiddleware(async (to, from) => {
	const nuxtApp = useNuxtApp();
	const localeRoute = useLocaleRoute();
	const { loggedIn, user } = useAuth();

	// Si el usuario está logueado y ya tiene el email verificado
	if (loggedIn.value && user.value?.isVerified) {
		const libraryRoute = localeRoute('library', nuxtApp.$i18n.locale.value);
		const libraryPath = libraryRoute != null ? libraryRoute.path : '/';

		return navigateTo(libraryPath);
	}
});
