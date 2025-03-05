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
					<LandingButton>
						<div class="px-2 py-1 uppercase">{{ t('home.button') }}</div>
					</LandingButton>
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

		<div id="content" class="flex flex-col px-6 md:px-0 md:w-2/3 md:mx-auto scroll-mt-20">
			<div class="text-center my-16">
				<h2 class="text-3xl font-semibold tracking-wider mb-3 uppercase">{{ t('home.section_1_title') }}</h2>
				<p class="font-thin leading-7">{{ t('home.section_1_content') }}</p>
			</div>

			<div class="flex flex-col lg:flex-row justify-center">
				<div class="lg:w-1/3">
					<NuxtImg src="/images/info_1.webp" placeholder preload loading="lazy" class="rounded w-full h-full object-cover" />
				</div>

				<div class="my-16 lg:my-0 lg:mx-4 xl:mx-6 lg:w-1/3">
					<NuxtImg src="/images/info_2.webp" placeholder preload loading="lazy" class="rounded w-full  h-full object-cover" />
				</div>

				<div class="lg:w-1/3">
					<NuxtImg src="/images/info_3.webp" placeholder preload loading="lazy" class="rounded w-full  h-full object-cover" />
				</div>
			</div>

			<div class="flex flex-col xl:flex-row my-16">
				<div class="xl:w-1/2 text-right">
					<h3 class="text-2xl font-semibold tracking-wider uppercase mb-4">{{ t('home.section_2_title') }}</h3>
					<p class="font-thin leading-7">{{ t('home.section_2_content') }}</p>
				</div>

				<div class="h-0.5 w-full xl:w-0.5 my-16 xl:my-0 xl:mx-8 xl:h-full bg-acebooks-green-300"></div>

				<div class="xl:w-1/2">
					<h3 class="text-2xl font-semibold tracking-wider uppercase mb-4">{{ t('home.section_3_title') }}</h3>
					<ul class="list-inside list-disc font-thin leading-7">
						<li v-for="index in 7">{{ t('home.section_3_content_' + index) }}</li>
					</ul>
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>
