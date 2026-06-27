<script setup lang="ts">
const { t } = useI18n();
const i18Markdown = useI18nMarkdown();

definePageMeta({
	layout: {
		name: 'legal',
		props: {
			titleKey: 'faqs.title',
			dateKey: 'faqs.date',
		},
	},
});

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
	<RenderMarkdown :value="i18Markdown('faqs.line_', 10)" />
</template>
