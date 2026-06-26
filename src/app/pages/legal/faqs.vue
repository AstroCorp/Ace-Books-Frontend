<script setup lang="ts">
const { t } = useI18n();
const i18Markdown = useI18nMarkdown();

defineRouteRules({
	prerender: true,
});

defineI18nRoute({
	paths: {
		en: '/legal/faqs',
		es: '/legal/preguntas-frecuentes',
	},
});

useHead({
	title: t('home.title') + ' - ' + t('faqs.title'),
	meta: [
		{
			name: 'description',
			content: t('faqs.description'),
		},
	],
});
</script>

<template>
	<div class="flex flex-col justify-between min-h-screen">
		<Header />

		<div class="mx-auto my-10 w-3/4 lg:w-2/3">
			<div class="flex flex-col mb-8">
				<h1 class="text-3xl sm:text-4xl lg:text-5xl font-thin italic tracking-wider mb-4 uppercase dark:text-white">{{ t('faqs.title') }}</h1>
				<time class="border-l-3 pl-4 border-acebooks-green-100">{{ t('faqs.date') }}</time>
			</div>

			<RenderMarkdown :value="i18Markdown('faqs.line_', 10)" />
		</div>

		<Footer />
	</div>
</template>
