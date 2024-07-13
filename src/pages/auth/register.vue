<script setup lang="ts">
const { t } = useI18n();

defineI18nRoute({
	paths: {
		en: '/register',
		es: '/registrarse',
	},
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
</script>

<template>
	<div class="flex flex-col justify-center min-h-screen">
		<div class="flex flex-col m-6 sm:mx-auto sm:w-full sm:max-w-md">
			<NuxtLinkLocale
				to="/"
				class="flex justify-center my-4 text-shadow shadow-black/75 text-center text-4xl cursor-pointer text-white"
			>
				Ace Books
			</NuxtLinkLocale>

			<div class="flex flex-row relative">
				<NuxtLinkLocale
					class="flex justify-center items-center z-10 w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 rounded-tl-md focus:outline-none text-center shadow-inner-full bg-opacity-85"
					to="/login"
				>
					<div>{{ $t('register.login') }}</div>
				</NuxtLinkLocale>

				<NuxtLinkLocale
					class="flex justify-center items-center z-10 w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 rounded-tr-md focus:outline-none text-center"
					to="/register"
				>
					<div>{{ $t('register.register') }}</div>
				</NuxtLinkLocale>

				<div class="w-full hidden sm:flex justify-end sm:ml-14 absolute z-0">
					<NuxtLinkLocale
						to="/"
						class="p-3 rounded-md hover:bg-white text-white hover:shadow-inner-full hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer focus:outline-none"
					>
						<nuxt-icon name="close" class="flex w-6 h-6" />
					</NuxtLinkLocale>
				</div>
			</div>

			<form
				class="px-6 py-8 lg:px-8 bg-white rounded-b-md"
			>
				<label class="block text-sm font-medium text-gray-700">{{ $t('register.email') }}</label>
				<div class="mt-1 mb-4">
					<input
						type="email"
						class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
					/>

					<div class="text-sm text-red-500 pt-1">{{ $t('register.email_error') }}</div>
				</div>

				<label class="block text-sm font-medium text-gray-700">{{ $t('register.password') }}</label>
				<div class="mt-1 mb-4">
					<input
						type="password"
						class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
					/>

					<FormValidationRule :isValid="true">{{ $t('register.password_error') }}</FormValidationRule>
					<FormValidationRule :isValid="true">{{ $t('register.password_validation_1') }}</FormValidationRule>
					<FormValidationRule :isValid="true">{{ $t('register.password_validation_2') }}</FormValidationRule>
					<FormValidationRule :isValid="false">{{ $t('register.password_validation_3') }}</FormValidationRule>
					<FormValidationRule :isValid="false">{{ $t('register.password_validation_4') }}</FormValidationRule>
					<FormValidationRule :isValid="false">{{ $t('register.password_validation_5') }}</FormValidationRule>
				</div>

				<label class="block text-sm font-medium text-gray-700">{{ $t('register.repeat_password') }}</label>
				<div class="mt-1 mb-4">
					<input
						type="password"
						class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
					/>

					<div class="text-sm text-red-500 pt-1">{{ $t('register.repeat_password_error') }}</div>
				</div>

				<button type="submit" class="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
					{{ $t('register.register') }}
				</button>
			</form>

			<Footer />
		</div>
	</div>
</template>

