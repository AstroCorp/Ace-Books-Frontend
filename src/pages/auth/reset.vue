<script setup lang="ts">
const { t } = useI18n();

defineI18nRoute({
	paths: {
		en: '/reset',
		es: '/restaurar',
	},
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
	<div class="flex flex-col justify-center min-h-screen">
		<div class="m-6 sm:mx-auto sm:w-full sm:max-w-md">
			<NuxtLinkLocale
				to="/"
				class="flex justify-center mb-4 text-shadow text-center text-4xl cursor-pointer text-white"
			>
				Ace Books
			</NuxtLinkLocale>

			<div class="flex flex-row relative">
				<div class="w-full hidden sm:flex justify-end sm:ml-14 absolute z-0">
					<NuxtLinkLocale
						to="/login"
						class="p-3 rounded-md hover:bg-white text-white hover:shadow-inner-full hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer focus:outline-none"
					>
						<nuxt-icon name="close" class="flex w-6 h-6" />
					</NuxtLinkLocale>
				</div>
			</div>

			<form
				class="px-6 py-8 lg:px-8 bg-white rounded-md"
			>
				<h1 class="text-2xl text-gray-500 mb-6">{{ $t('reset.title') }}</h1>

				<label class="block text-sm font-medium text-gray-700">{{ $t('reset.email') }}</label>
				<div class="mt-1 mb-4">
					<input
						type="email"
						class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
					/>
				</div>

				<button type="submit" class="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
					{{ $t('reset.next') }}
				</button>
			</form>

			<Footer />
		</div>
	</div>
</template>
