<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();
const { session } = useAuth();

defineI18nRoute({
	paths: {
		en: '/verify',
		es: '/verificar',
	},
});

definePageMeta({
	layout: 'auth',
	middleware: ["require-session", "disabled-with-email-verified"],
});

useHead({
	title: t('home.title') + ' - ' + t('verify.title'),
	meta: [
		{
			name: 'description',
			content: t('verify.description'),
		},
	],
});

const fetching = ref(false);

const resendVerificationEmail = async (event: Event) => {
	event.preventDefault();

	if (fetching.value) return;

	fetching.value = true;

	const response = await $fetch<any>(config.public.backendUrl + '/users/send-verify-account-email', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${session.value.access_token}`,
		},
		ignoreResponseError: true,
	});

	if ('statusCode' in response && response.statusCode === 429) {
		useNuxtApp().$toast.error(t('verify.toast_error_429'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	if ('statusCode' in response && response.statusCode !== 200) {
		useNuxtApp().$toast.error(t('verify.toast_error'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	useNuxtApp().$toast.success(t('verify.toast_success'), {
		position: useNuxtApp().$toast.POSITION.TOP_CENTER,
	});

	fetching.value = false;
};
</script>

<template>
	<form @submit="resendVerificationEmail">
		<div class="mb-4 bg-acebooks-warning-background text-acebooks-warning-text rounded-md p-4" role="alert">
			<p>{{ t('verify.warning_message') }}</p>
		</div>

		<Button
			type="submit"
			:disabled="fetching"
		>
			<Spinner v-if="fetching" />
			<span v-else>{{ t('verify.resend_button') }}</span>
		</Button>
	</form>
</template>

