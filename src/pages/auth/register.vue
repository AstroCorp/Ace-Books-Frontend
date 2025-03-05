<script setup lang="ts">
import type { SessionSuccessResponse, RegisterErrorResponse } from '~/types/auth';

const { t, locale } = useI18n();
const localeRoute = useLocaleRoute();
const config = useRuntimeConfig();
const { fetch } = useUserSession();

defineI18nRoute({
	paths: {
		en: '/register',
		es: '/registrarse',
	},
});

definePageMeta({
	middleware: ["disabled-with-session"],
});

useHead({
	title: t('home.title') + ' - ' + t('register.title'),
	meta: [
		{
			name: 'description',
			content: t('register.description'),
		},
	],
});

const registerForm = ref({
	email: '',
	password: '',
	repeatPassword: '',
});
const fetching = ref(false);
const emailErrors = ref<string[]>([]);
const passwordErrors = ref<string[]>([]);

const passwordMinLength = computed(() => registerForm.value.password.length >= 8);
const passwordMaxLength = computed(() => registerForm.value.password.length <= 32);
const passwordHasUppercase = computed(() => /[A-Z]/.test(registerForm.value.password));
const passwordHasLowercase = computed(() => /[a-z]/.test(registerForm.value.password));
const passwordHasNumber = computed(() => /\d/.test(registerForm.value.password));
const passwordHasSpecialCharacter = computed(() => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(registerForm.value.password));

const samePassword = computed(() => registerForm.value.password === registerForm.value.repeatPassword);

const readyForSubmit = computed(() => {
	return passwordMinLength.value
		&& passwordMaxLength.value
		&& passwordHasUppercase.value
		&& passwordHasLowercase.value
		&& passwordHasNumber.value
		&& passwordHasSpecialCharacter.value
		&& samePassword.value;
});

const submitForm = async (event: Event) => {
	event.preventDefault();

	if (!readyForSubmit.value || fetching.value) return;

	fetching.value = true;
	emailErrors.value = [];
	passwordErrors.value = [];

	const response = await $fetch<SessionSuccessResponse | RegisterErrorResponse>(config.public.frontendUrl + '/api/auth/register', {
		method: 'POST',
		body: registerForm.value,
		ignoreResponseError: true,
	});

	if ('data' in response && response.data.statusCode === 400) {
		emailErrors.value = response.data.message.filter((message) => message.includes('email'));
		passwordErrors.value = response.data.message.filter((message) => !message.includes('email'));
		fetching.value = false;

		return;
	}

	if ('data' in response && response.data.statusCode !== 200) {
		useNuxtApp().$toast.error(t('register.toast_error'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	await fetch();

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

					<label class="block text-sm font-medium text-gray-700">{{ t('register.email') }}</label>
					<div class="mt-1 mb-4">
						<Input
							v-model="registerForm.email"
							type="email"
							required
						/>

						<div v-if="emailErrors.length > 0" class="text-sm text-red-500 pt-1">{{ t('register.email_error') }}</div>
					</div>

					<label class="block text-sm font-medium text-gray-700">{{ t('register.password') }}</label>
					<div class="mt-1 mb-4">
						<Input
							v-model="registerForm.password"
							type="password"
							required
						/>

						<div v-if="passwordErrors.length > 0" class="text-sm text-red-500 py-1">{{ t('register.password_error') }}</div>

						<FormValidationRule v-if="registerForm.password.length > 0" :isValid="passwordMinLength">{{ t('register.password_validation_1') }}</FormValidationRule>
						<FormValidationRule v-if="registerForm.password.length > 0" :isValid="passwordMaxLength">{{ t('register.password_validation_2') }}</FormValidationRule>
						<FormValidationRule v-if="registerForm.password.length > 0" :isValid="passwordHasUppercase">{{ t('register.password_validation_3') }}</FormValidationRule>
						<FormValidationRule v-if="registerForm.password.length > 0" :isValid="passwordHasLowercase">{{ t('register.password_validation_4') }}</FormValidationRule>
						<FormValidationRule v-if="registerForm.password.length > 0" :isValid="passwordHasNumber">{{ t('register.password_validation_5') }}</FormValidationRule>
						<FormValidationRule v-if="registerForm.password.length > 0" :isValid="passwordHasSpecialCharacter">{{ t('register.password_validation_6') }}</FormValidationRule>
					</div>

					<label class="block text-sm font-medium text-gray-700">{{ t('register.repeat_password') }}</label>
					<div class="mt-1 mb-4">
						<Input
							v-model="registerForm.repeatPassword"
							type="password"
							required
						/>

						<div v-if="!samePassword" class="text-sm text-red-500 pt-1">{{ t('register.repeat_password_error') }}</div>
					</div>

					<i18n-t keypath="register.warning" tag="p" class="text-xs mb-3">
						<template #terms-of-use>
							<NuxtLinkLocale
								to="/legal/terms-and-conditions"
								target="_blank"
								class="font-medium text-green-600 hover:text-green-500"
							>
								{{ t('register.terms-of-use') }}
							</NuxtLinkLocale>
						</template>

						<template #privacy-policy>
							<NuxtLinkLocale
								to="/legal/privacy-notice"
								target="_blank"
								class="font-medium text-green-600 hover:text-green-500"
							>
								{{ t('register.privacy-policy') }}
							</NuxtLinkLocale>
						</template>
					</i18n-t>

					<Button
						type="submit"
						:disabled="!readyForSubmit"
					>
						{{ t('register.register') }}
					</Button>

					<div class="mt-1.5">
						<span class="text-sm mr-1">{{ t('register.question') }}</span>

						<NuxtLinkLocale
							to="/login"
							class="text-sm font-medium text-green-600 hover:text-green-500"
						>
							{{ t('register.login') }}
						</NuxtLinkLocale>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

