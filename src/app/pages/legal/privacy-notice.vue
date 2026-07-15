<script setup lang="ts">
const { t } = useI18n();
const i18Markdown = useI18nMarkdown();

definePageMeta({
	layout: {
		name: 'legal',
		props: {
			titleKey: 'privacy.title',
			dateKey: 'privacy.date',
		},
	},
});

defineRouteRules({
	prerender: true,
});

defineI18nRoute({
	paths: {
		en: '/legal/privacy-notice',
		es: '/legal/aviso-de-privacidad',
	},
});

useHead({
	title: t('home.title') + ' - ' + t('privacy.title'),
	meta: [
		{
			name: 'description',
			content: t('privacy.description'),
		},
	],
});
</script>

<template>
	<RenderMarkdown :value="i18Markdown('privacy.line_', 70)" />
</template>
