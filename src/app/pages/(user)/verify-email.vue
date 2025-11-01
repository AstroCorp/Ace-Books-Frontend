<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();

defineI18nRoute({
	paths: {
		en: '/verify-email',
		es: '/verificar-email',
	},
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
const showError = ref(false);

const verifyEmail = async () => {
	const { email, hash, expires, signature } = route.query;
	const { fetchSession } = useAuth();

	fetching.value = true;
	showError.value = false;

	try {
		await $fetch(`${config.public.frontendUrl}/api/users/verify-account`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				email,
				hash,
				expires,
				signature,
			},
		});

		await fetchSession();
	} catch (err) {
		showError.value = true;
	}

	fetching.value = false;
}

onMounted(async () => {
	await verifyEmail();
});
</script>

<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy"
					class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<div class="flex flex-row items-center lg:px-8 w-full min-h-svh sm:w-1/2 md:w-2/5 xl:w-2/6 bg-white">
				<div class="w-full px-6 py-4">
					<NuxtLinkLocale to="/" class="flex flex-col items-center mb-4 xl:mb-5">
						<nuxt-icon name="logo" class="w-1/3" />
						<p class="mt-3 logo">Ace Books</p>
					</NuxtLinkLocale>

					<div v-if="!fetching" class="mb-4 rounded-md p-4 text-center" :class="{
						'bg-green-100 text-green-700': !showError,
						'bg-red-100 text-red-700': showError,
					}" role="alert">
						<p>{{ showError ? t('verify.error_message') : t('verify.success_message') }}</p>
					</div>

					<div v-else class="flex flex-col justify-center items-center mb-4 p-4">
						<Spinner :color="400" />
						<p class="mt-4 text-center">{{ t('verify.loading_message') }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
