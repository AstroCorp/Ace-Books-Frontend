<script setup lang="ts">
const { t } = useI18n();
const i18Markdown = useI18nMarkdown();

definePageMeta({
	layout: {
		name: 'legal',
		props: {
			titleKey: 'terms.title',
			dateKey: 'terms.date',
		},
	},
});

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
	<RenderMarkdown :value="i18Markdown('terms.line_', 25)" />
</template>
