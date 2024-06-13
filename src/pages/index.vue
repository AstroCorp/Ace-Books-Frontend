<script setup lang="ts">
const { t } = useI18n();

defineRouteRules({
	prerender: true
});

useHead({
	title: t('home.title'),
	meta: [
		{
			name: 'description',
			content: t('home.description'),
		},
	],
});
</script>

<template>
	<div class="h-screen flex flex-col">
		<Header />

		<div class="h-screen flex flex-col justify-center">
			<article class="text-white w-full p-4 mx-auto md:w-2/3 xl:w-1/2 xl:ml-32">
				<h1 class="text-4xl font-semibold">{{ $t('home.h1') }}</h1>
				<p class="text-sm mt-2 mb-10">{{ $t('home.p') }}</p>

				<NuxtLinkLocale
					class="text-white px-4 py-3 border-2 rounded-md uppercase bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out"
					to="/register"
				>
					{{ $t('home.button') }}
				</NuxtLinkLocale>
			</article>
		</div>

		<Footer />
	</div>
</template>
