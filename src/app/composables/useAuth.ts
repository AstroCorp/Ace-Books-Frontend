import { createSharedComposable } from '@vueuse/core';

export const useAuth = createSharedComposable(() => {
	const { loggedIn, session, user, fetch, clear } = useUserSession();

	const logout = async () => {
		await clear();
		await navigateTo('/');
	}

	return {
		loggedIn,
		session,
		user,
		fetch,
		clear,
		logout,
	};
});
