<script setup lang="ts">
const { t } = useI18n();
const i18Markdown = useI18nMarkdown();

defineRouteRules({
	prerender: true,
});

defineI18nRoute({
	paths: {
		en: '/legal/terms-and-conditions',
		es: '/legal/terminos-y-condiciones',
	},
});

useHead({
	title: t('home.title') + ' - ' + t('terms.title'),
	meta: [
		{
			name: 'description',
			content: t('terms.description'),
		},
	],
});
</script>

<template>
	<div class="flex flex-col justify-between min-h-screen">
		<Header />

		<div class="relative px-4 pt-14 h-64 flex flex-col items-center justify-center bg-acebooks-green-900 text-white">
			<h1 class="text-2xl">{{ t('terms.title') }}</h1>
			<div class="border my-2 border-white/40 w-1/6"></div>
			<time class="trext-lg">{{ t('terms.date') }}</time>
		</div>

		<div class="mx-auto my-10 w-3/4 lg:w-2/3">
			<RenderMarkdown :value="i18Markdown('terms.line_', 25)" />
		</div>

		<Footer />
	</div>
</template>
