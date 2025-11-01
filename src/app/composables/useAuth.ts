import { createSharedComposable } from '@vueuse/core';

export const useAuth = createSharedComposable(() => {
	const { loggedIn, session, user, fetch, clear } = useUserSession();

	const logout = async () => {
		await clear();
		await navigateTo('/');
	}

	const fetchSession = async () => {
		await fetch();
	};

	const clearSession = async () => {
		await clear();
	}

	return {
		loggedIn,
		session,
		user,
		fetchSession,
		clearSession,
		logout,
	};
});
