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
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<div class="flex flex-row items-center lg:px-8 w-full min-h-svh sm:w-1/2 md:w-2/5 xl:w-2/6 bg-white">
				<form class="w-full px-6 py-4" @submit="resendVerificationEmail">
					<NuxtLinkLocale to="/" class="flex flex-col items-center mb-4 xl:mb-5">
						<nuxt-icon name="logo" class="w-1/3" />
						<p class="mt-3 logo">Ace Books</p>
					</NuxtLinkLocale>

					<div class="mb-4 bg-yellow-100 text-yellow-700 rounded-md p-4" role="alert">
						<p>{{ t('verify.warning_message') }}</p>
					</div>

					<Button
						type="submit"
						:disabled="fetching"
					>
						<Spinner v-if="fetching" :color="100" />
						<span v-else>{{ t('verify.resend_button') }}</span>
					</Button>
				</form>
			</div>
		</div>
	</div>
</template>

