<script setup lang="ts">
const { t } = useI18n();
const i18Markdown = useI18nMarkdown();

definePageMeta({
	layout: {
		name: 'legal',
		props: {
			titleKey: 'cookies.title',
			dateKey: 'cookies.date',
		},
	},
});

defineRouteRules({
	prerender: true,
});

defineI18nRoute({
	paths: {
		en: '/legal/cookies-notice',
		es: '/legal/aviso-de-cookies',
	},
});

useHead({
	title: t('home.title') + ' - ' + t('cookies.title'),
	meta: [
		{
			name: 'description',
			content: t('cookies.description'),
		},
	],
});
</script>

<template>
	<RenderMarkdown :value="i18Markdown('cookies.line_', 11)" />
</template>
