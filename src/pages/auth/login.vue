<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/login',
		es: '/iniciar-sesion',
	},
});
</script>

<template>
	<div class="bg-books h-screen flex flex-col justify-center">
		<div class="m-16 sm:m-6 sm:mx-auto sm:w-full sm:max-w-md">
			<NuxtLinkLocale
				to="/"
				class="block mb-6 text-shadow text-center text-4xl cursor-pointer text-white md:text-white"
			>
				Ace Books
			</NuxtLinkLocale>

			<div class="flex flex-row relative">
				<button class="z-10 w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 rounded-tl-md focus:outline-none shadow-inner-full bg-opacity-85">
					{{ $t('login.title') }}
				</button>

				<button class="z-10 w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 rounded-tr-md focus:outline-none">
					{{ $t('register.title') }}
				</button>

				<div class="w-full flex justify-end ml-14 absolute z-0">
					<NuxtLinkLocale
						to="/"
						class="p-2 rounded-md hover:bg-white hover:bg-opacity-85 transition duration-300 ease-in-out cursor-pointer"
					>
						<nuxt-icon name="close" class="flex w-8 h-8 text-white" />
					</NuxtLinkLocale>
				</div>
			</div>

			<form
				class="px-6 py-8 lg:px-8 bg-white rounded-b-md"
			>
				<label class="block text-sm font-medium text-gray-700">{{ $t('login.email') }}</label>
				<div class="mt-1">
					<input
						type="email"
						class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
					/>

					<div class="text-sm text-red-500 pt-1">{{ $t('login.email_error') }}</div>
				</div>

				<label class="block text-sm font-medium text-gray-700">{{ $t('login.password') }}</label>
				<div class="mt-1">
					<input
						type="password"
						class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
					/>

					<div class="text-sm text-red-500 pt-1">{{ $t('login.password_error') }}</div>
				</div>

				<div class="flex items-center justify-start my-4">
					<button class="text-sm font-medium text-blue-600 hover:text-blue-500">
						{{ $t('login.forgotPassword') }}
					</button>
				</div>

				<button type="submit" class="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
					{{ $t('login.title') }}
				</button>
			</form>
		</div>

		<Footer class="p-0" />
	</div>
</template>
