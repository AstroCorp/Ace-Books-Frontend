<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();

defineI18nRoute({
	paths: {
		en: '/reset',
		es: '/restaurar',
	},
});

definePageMeta({
	layout: 'auth',
	middleware: ["disabled-with-session"],
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
	email: '',
});
const fetching = ref(false);

const readyForSubmit = computed(() => {
	return resetForm.value.email.length > 0;
});

const submitForm = async (event: Event) => {
	event.preventDefault();

	if (!readyForSubmit.value || fetching.value) return;

	fetching.value = true;

	const response = await $fetch<any>(config.public.backendUrl + '/auth/send-reset-password-email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: resetForm.value,
		ignoreResponseError: true,
	});

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

	useNuxtApp().$toast.success(t('reset.toast_success_1'), {
		position: useNuxtApp().$toast.POSITION.TOP_CENTER,
	});

	fetching.value = false;
}
</script>

<template>
	<form @submit="submitForm">
		<label class="block text-sm font-medium text-gray-700 dark:text-white">{{ t('reset.email') }}</label>
		<div class="mt-1 mb-4">
			<Input
				v-model="resetForm.email"
				type="email"
				required
				class="dark:text-black"
			/>
		</div>

		<Button
			type="submit"
			:disabled="!readyForSubmit || fetching"
		>
			<Spinner v-if="fetching" :color="100" />
			<span v-else>{{ t('reset.reset') }}</span>
		</Button>

		<div class="mt-1.5">
			<span class="text-sm mr-1 dark:text-white">{{ t('reset.question_1') }}</span>

			<NuxtLinkLocale
				to="/login"
				class="text-sm font-medium text-green-600 hover:text-green-500"
			>
				{{ t('reset.login') }}
			</NuxtLinkLocale>
		</div>

		<div class="mt-1.5">
			<span class="text-sm mr-1 dark:text-white">{{ t('reset.question_2') }}</span>

			<NuxtLinkLocale
				to="/register"
				class="text-sm font-medium text-green-600 hover:text-green-500"
			>
				{{ t('reset.register') }}
			</NuxtLinkLocale>
		</div>
	</form>
</template>
