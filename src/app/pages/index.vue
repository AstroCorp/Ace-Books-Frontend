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
					<Button preset="outline">
						<div class="px-2 py-1 uppercase">{{ t('home.button') }}</div>
					</Button>
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
					<div class="absolute flex h-full w-full justify-center items-center bg-white/70 rounded-full z-10">
						<SvgIcon name="i-fluent-chevron-down-32-filled" mode="svg" class="text-green-700 fill-current" />
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

		<div id="content" class="flex flex-col scroll-mt-20 px-6 md:px-0 md:w-2/3 md:mx-auto text-center my-16">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-thin italic tracking-wider mb-3 uppercase dark:text-white sm:w-2/3 mx-auto">{{ t('home.section_1_title') }}</h2>

			<div class="h-0.5 w-1/5 mx-auto my-8 lg:my-14 bg-gray-300"></div>

			<p class="font-thin leading-7 w-2/3 mx-auto dark:text-white">{{ t('home.section_1_content') }}</p>

			<NuxtImg src="/images/info_1.webp" placeholder preload loading="lazy" class="rounded-md w-full h-[500px] object-cover mt-8 lg:mt-16" />
		</div>

		<Footer />
	</div>
</template>
