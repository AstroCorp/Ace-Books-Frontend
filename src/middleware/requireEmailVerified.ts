export default defineNuxtRouteMiddleware(async (to, from) => {
	const nuxtApp = useNuxtApp();
	const localeRoute = useLocaleRoute();
	const { loggedIn, user } = useAuth();

	// Si el usuario está logueado pero no tiene el email verificado
	if (loggedIn.value && !user.value?.isVerified) {
		const verifyRoute = localeRoute('verify', nuxtApp.$i18n.locale.value);
		const verifyPath = verifyRoute != null ? verifyRoute.path : '/';

		return navigateTo(verifyPath);
	}
});
