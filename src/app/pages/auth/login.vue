<script setup lang="ts">
import type { LoginErrorResponse, SessionSuccessResponse } from '~/types/auth';

const { t, locale } = useI18n();
const localeRoute = useLocaleRoute();
const config = useRuntimeConfig();
const { fetchSession } = useAuth();

defineI18nRoute({
	paths: {
		en: '/login',
		es: '/iniciar-sesion',
	},
});

definePageMeta({
	middleware: ["disabled-with-session"],
});

useHead({
	title: t('home.title') + ' - ' + t('login.title'),
	meta: [
		{
			name: 'description',
			content: t('login.description'),
		},
	],
});

const loginForm = ref({
	email: '',
	password: '',
});
const fetching = ref(false);
const showLoginError = ref(false);

const readyForSubmit = computed(() => {
	return loginForm.value.email.length > 0 && loginForm.value.password.length > 0;
});

const submitForm = async (event: Event) => {
	event.preventDefault();

	if (!readyForSubmit.value || fetching.value) return;

	fetching.value = true;
	showLoginError.value = false;

	const response = await $fetch<SessionSuccessResponse | LoginErrorResponse>(config.public.frontendUrl + '/api/auth/login', {
		method: 'POST',
		body: loginForm.value,
		ignoreResponseError: true,
	});

	if ('data' in response && response.data.statusCode === 401) {
		showLoginError.value = true;
		fetching.value = false;

		return;
	}

	if ('data' in response && response.data.statusCode !== 200) {
		useNuxtApp().$toast.error(t('login.toast_error'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	await fetchSession();

	const libraryRoute = localeRoute('library', locale.value);
	const libraryPath = libraryRoute != null ? libraryRoute.path : '/';

	await navigateTo(libraryPath);

	fetching.value = false;
};
</script>

<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<div class="flex flex-row items-center lg:px-8 w-full min-h-svh sm:w-1/2 md:w-2/5 xl:w-2/6 bg-white">
				<form class="w-full px-6 py-4" @submit="submitForm">
					<NuxtLinkLocale to="/" class="flex flex-col items-center mb-4 xl:mb-5">
						<nuxt-icon name="logo" class="w-1/3" />
						<p class="mt-3 logo">Ace Books</p>
					</NuxtLinkLocale>

					<label class="block text-sm font-medium text-gray-700">{{ t('login.email') }}</label>
					<div class="mt-1 mb-4">
						<Input
							v-model="loginForm.email"
							type="email"
						/>
					</div>

					<label class="block text-sm font-medium text-gray-700">{{ t('login.password') }}</label>
					<div class="mt-1 mb-4">
						<Input
							v-model="loginForm.password"
							type="password"
						/>

						<div v-if="showLoginError" class="text-sm text-red-500 pt-1">{{ t('login.error') }}</div>
					</div>

					<Button
						type="submit"
						:disabled="!readyForSubmit || fetching"
					>
						{{ t('login.login') }}
					</Button>

					<div class="mt-1.5">
						<span class="text-sm mr-1">{{ t('login.question_1') }}</span>

						<NuxtLinkLocale
							to="/register"
							class="text-sm font-medium text-green-600 hover:text-green-500"
						>
							{{ t('login.register') }}
						</NuxtLinkLocale>
					</div>

					<div class="mt-1.5">
						<span class="text-sm mr-1">{{ t('login.question_2') }}</span>

						<NuxtLinkLocale
							to="/reset"
							class="text-sm font-medium text-green-600 hover:text-green-500"
						>
							{{ t('login.forgot_password') }}
						</NuxtLinkLocale>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
