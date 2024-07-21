<script setup lang="ts">
const { t } = useI18n();

defineI18nRoute({
	paths: {
		en: '/login',
		es: '/iniciar-sesion',
	},
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
</script>

<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<div class="flex flex-row items-center lg:px-8 w-full min-h-svh sm:w-1/2 md:w-2/5 xl:w-2/6 bg-white">
				<form class="w-full px-6 py-4">
					<NuxtLinkLocale to="/">
						<nuxt-icon name="logo" class="flex w-1/3 mx-auto mb-4 xl:mb-5" />
					</NuxtLinkLocale>

					<label class="block text-sm font-medium text-gray-700">{{ t('login.email') }}</label>
					<div class="mt-1 mb-4">
						<input
							type="email"
							class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
						/>
					</div>

					<label class="block text-sm font-medium text-gray-700">{{ t('login.password') }}</label>
					<div class="mt-1 mb-4">
						<input
							type="password"
							class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
						/>

						<div class="text-sm text-red-500 pt-1">{{ t('login.error') }}</div>
					</div>

					<button type="submit" class="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
						{{ t('login.login') }}
					</button>

					<div class="mt-1.5">
						<span class="text-sm mr-1">{{ t('login.question_1') }}</span>

						<NuxtLinkLocale
							to="/register"
							class="text-sm font-medium text-blue-600 hover:text-blue-500"
						>
							{{ t('login.register') }}
						</NuxtLinkLocale>
					</div>

					<div class="flex items-center justify-start mt-1.5">
						<span class="text-sm mr-1">{{ t('login.question_2') }}</span>

						<NuxtLinkLocale
							to="/reset"
							class="text-sm font-medium text-blue-600 hover:text-blue-500"
						>
							{{ t('login.forgot_password') }}
						</NuxtLinkLocale>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
