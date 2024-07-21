<script setup lang="ts">
import { useScroll } from '@vueuse/core';

const { t } = useI18n();
const { y: topScroll } = useScroll(document);

defineRouteRules({
	prerender: true,
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

		<div class="min-h-svh flex flex-col justify-between relative">
			<div class="h-8 w-full pt-12"></div>

			<article class="text-white w-full p-4 mx-auto md:w-2/3 xl:w-1/2 xl:ml-32">
				<h1 class="text-4xl font-semibold text-shadow shadow-black/75">{{ t('home.h1') }}</h1>
				<p class="text-sm mt-2 mb-6 text-shadow shadow-black/75">{{ t('home.p') }}</p>

				<NuxtLinkLocale to="/register">
					<MainButton class="px-4 py-3 uppercase">
						{{ t('home.button') }}
					</MainButton>
				</NuxtLinkLocale>

				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</article>

			<div class="flex justify-center h-8 w-full mb-8">
				<a
					class="relative h-12 w-12"
					:class="{
						'opacity-0 transition-opacity duration-200 pointer-events-none': topScroll > 0,
					}"
					href="#content"
				>
					<div class="absolute flex h-full w-full justify-center items-center bg-white bg-opacity-70 rounded-full z-10">
						<nuxt-icon name="down" class="text-green-700" />
					</div>

					<div
						class="absolute top-0 left-0 h-full w-full rounded-full"
						:class="{
							'animate-pulse-v2 bg-white opacity-70': topScroll === 0,
						}"
					></div>
				</a>
			</div>
		</div>

		<div id="content" class="flex flex-col bg-gray-100">
			<div class="bg-gray-100 p-16 flex flex-col md:flex-row justify-center items-center">
				<NuxtImg src="/images/info_1.webp" placeholder preload loading="lazy" class="w-96 lg:w-auto h-48 lg:h-64 rounded aspect-[25/14]" />

				<div class="w-96 min-w-96 pt-10 md:p-10">
					<h2 class="text-2xl font-semibold mb-2">Tu propia biblioteca</h2>
					<p>Almacena, ordena y disfruta de todos tus libros como quieras, trabajamos para que tengas la mejor experiencia posible.</p>
				</div>
			</div>

			<div class="bg-gray-200 p-16 flex flex-col md:flex-row-reverse justify-center items-center">
				<NuxtImg src="/images/info_2.webp" placeholder preload loading="lazy" class="w-96 lg:w-auto h-48 lg:h-64 rounded aspect-[25/14]" />

				<div class="w-96 min-w-96 pt-10 md:p-10">
					<h2 class="text-2xl font-semibold mb-2">Siempre disponible</h2>
					<p>Puedes acceder a tu biblioteca para disfrutar de tus libros desde cualquier dispositivo, ya sea un ordenador, tablet o smartphone.</p>
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>
