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

// Verificar el email en el servidor para devolver un 403 si es necesario
if (import.meta.server) {
	const { email, hash, expires, signature } = route.query;

	const { error } = await useFetch(`${config.nuxtBackendUrl}/users/verify-account?expires=${expires}&signature=${signature}`, {
		method: 'POST',
		body: {
			email,
			hash,
		},
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (error.value) {
		throw createError({
			statusCode: 403,
		});
	}
}
</script>

<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<div class="flex flex-row items-center lg:px-8 w-full min-h-svh sm:w-1/2 md:w-2/5 xl:w-2/6 bg-white">
				<div class="w-full px-6 py-4">
					<NuxtLinkLocale to="/" class="flex flex-col items-center mb-4 xl:mb-5">
						<nuxt-icon name="logo" class="w-1/3" />
						<p class="mt-3 logo">Ace Books</p>
					</NuxtLinkLocale>

					<div class="mb-4 bg-green-100 text-green-700 rounded-md p-4" role="alert">
						<p>{{ t('verify.success_message') }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

