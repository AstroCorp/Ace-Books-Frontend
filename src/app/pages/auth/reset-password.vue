<script setup lang="ts">
import { useUrlSearchParams } from '@vueuse/core';
import type { ResetPasswordErrorResponse, ResetPasswordSuccessResponse } from '~/types/auth';

const { t } = useI18n();
const config = useRuntimeConfig();
const params = useUrlSearchParams('history')

defineI18nRoute({
	paths: {
		en: '/reset-password',
		es: '/restaurar-contrasena',
	},
});

definePageMeta({
	middleware: ["disabled-with-session", "require-reset-password-params"],
});

useHead({
	title: t('home.title') + ' - ' + t('reset.title'),
	meta: [
		{
			name: 'description',
			content: t('reset.description'),
		},
	],
});

const resetForm = ref({
	password: '',
	email: params.email || '',
	token: params.token || '',
});
const fetching = ref(false);
const passwordErrors = ref<string[]>([]);

const passwordMinLength = computed(() => resetForm.value.password.length >= 8);
const passwordMaxLength = computed(() => resetForm.value.password.length <= 32);
const passwordHasUppercase = computed(() => /[A-Z]/.test(resetForm.value.password));
const passwordHasLowercase = computed(() => /[a-z]/.test(resetForm.value.password));
const passwordHasNumber = computed(() => /\d/.test(resetForm.value.password));
const passwordHasSpecialCharacter = computed(() => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(resetForm.value.password));

const readyForSubmit = computed(() => {
	return passwordMinLength.value
		&& passwordMaxLength.value
		&& passwordHasUppercase.value
		&& passwordHasLowercase.value
		&& passwordHasNumber.value
		&& passwordHasSpecialCharacter.value
		&& resetForm.value.email.length > 0
		&& resetForm.value.token.length > 0;
});

const submitForm = async (event: Event) => {
	event.preventDefault();

	if (!readyForSubmit.value || fetching.value) return;

	fetching.value = true;
	passwordErrors.value = [];

	const response = await $fetch<ResetPasswordSuccessResponse | ResetPasswordErrorResponse>(config.public.backendUrl + '/auth/reset-password', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: resetForm.value,
		ignoreResponseError: true,
	});

	console.log(response)

	if ('data' in response && response.data.statusCode === 400) {
		passwordErrors.value = response.data.message.filter((message) => !message.includes('email') && !message.includes('token'));
		fetching.value = false;

		return;
	}

	if ('statusCode' in response && response.statusCode === 400) {
		useNuxtApp().$toast.error(t('reset.toast_error_invalid'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	if ('statusCode' in response && response.statusCode === 429) {
		useNuxtApp().$toast.error(t('reset.toast_error_429'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	if ('statusCode' in response && response.statusCode !== 200) {
		useNuxtApp().$toast.error(t('reset.toast_error'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	useNuxtApp().$toast.success(t('reset.toast_success_2'), {
		position: useNuxtApp().$toast.POSITION.TOP_CENTER,
	});

	fetching.value = false;
}
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

					<label class="block text-sm font-medium text-gray-700">{{ t('reset.newPassword') }}</label>
					<div class="mt-1 mb-4">
						<Input
							v-model="resetForm.password"
							type="password"
							required
						/>

						<div v-if="passwordErrors.length > 0" class="text-sm text-red-500 py-1">{{ t('reset.password_error') }}</div>

						<FormValidationRule v-if="resetForm.password.length > 0" :isValid="passwordMinLength">{{ t('reset.password_validation_1') }}</FormValidationRule>
						<FormValidationRule v-if="resetForm.password.length > 0" :isValid="passwordMaxLength">{{ t('reset.password_validation_2') }}</FormValidationRule>
						<FormValidationRule v-if="resetForm.password.length > 0" :isValid="passwordHasUppercase">{{ t('reset.password_validation_3') }}</FormValidationRule>
						<FormValidationRule v-if="resetForm.password.length > 0" :isValid="passwordHasLowercase">{{ t('reset.password_validation_4') }}</FormValidationRule>
						<FormValidationRule v-if="resetForm.password.length > 0" :isValid="passwordHasNumber">{{ t('reset.password_validation_5') }}</FormValidationRule>
						<FormValidationRule v-if="resetForm.password.length > 0" :isValid="passwordHasSpecialCharacter">{{ t('reset.password_validation_6') }}</FormValidationRule>
					</div>

					<Input
						v-model="resetForm.email"
						type="hidden"
						required
					/>

					<Input
						v-model="resetForm.token"
						type="hidden"
						required
					/>

					<Button
						type="submit"
						:disable="!readyForSubmit.value || fetching"
					>
						<Spinner v-if="fetching" />
						<span v-else>{{ t('reset.change') }}</span>
					</Button>

					<div class="mt-1.5">
						<span class="text-sm mr-1">{{ t('reset.question_1') }}</span>

						<NuxtLinkLocale
							to="/login"
							class="text-sm font-medium text-green-600 hover:text-green-500"
						>
							{{ t('reset.login') }}
						</NuxtLinkLocale>
					</div>

					<div class="mt-1.5">
						<span class="text-sm mr-1">{{ t('reset.question_2') }}</span>

						<NuxtLinkLocale
							to="/register"
							class="text-sm font-medium text-green-600 hover:text-green-500"
						>
							{{ t('reset.register') }}
						</NuxtLinkLocale>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
