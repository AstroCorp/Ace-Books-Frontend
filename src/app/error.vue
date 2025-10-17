<script setup lang="ts">
import type { NuxtError } from '#app';

const { t } = useI18n();

interface Props {
	error: NuxtError;
}

defineProps<Props>();

const handleError = () => clearError({ redirect: '/' });

useHead({
	title: t('home.title') + ' - ' + t('error.title'),
	meta: [
		{
			name: 'description',
			content: t('error.description'),
		},
	],
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
		<header class="fixed md:h-auto">
			<nav class="flex items-center p-4 flex-wrap">
				<button
					@click="handleError"
					class="p-2 mr-4 inline-flex items-center text-white md:text-white text-4xl cursor-pointer text-shadow shadow-black/75"
				>
					Ace Books
				</button>
			</nav>
		</header>

		<div class="h-screen flex flex-col justify-center">
			<article class="flex flex-col items-center text-center">
				<h1 class="text-9xl text-white/60 mb-6 text-shadow shadow-black/40">{{ error.statusCode }}</h1>

				<LandingButton @click="handleError">
					{{ t('error.button') }}
				</LandingButton>
			</article>

			<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
		</div>

		<Footer />
	</div>
</template>
