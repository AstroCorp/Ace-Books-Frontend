<script setup lang="ts">
const { t } = useI18n();

defineI18nRoute({
	paths: {
		en: '/reset',
		es: '/restaurar',
	},
});

definePageMeta({
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
</script>

<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<div class="flex flex-row items-center lg:px-8 w-full min-h-svh sm:w-1/2 md:w-2/5 xl:w-2/6 bg-white">
				<form class="w-full px-6 py-4">
					<NuxtLinkLocale to="/" class="flex w-1/3 mx-auto mb-4 xl:mb-5">
						<nuxt-icon name="logo" class="w-full" />
					</NuxtLinkLocale>

					<label class="block text-sm font-medium text-gray-700">{{ t('reset.email') }}</label>
					<div class="mt-1 mb-4">
						<input
							type="email"
							class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
						/>
					</div>

					<button type="submit" class="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
						{{ t('reset.reset') }}
					</button>
				</form>
			</div>
		</div>
	</div>
</template>
