<script setup lang="ts">
const { t } = useI18n();

defineI18nRoute({
	paths: {
		en: '/library',
		es: '/biblioteca',
	},
});

definePageMeta({
	middleware: ["auth"],
});

useHead({
	title: t('home.title') + ' - ' + t('library.title'),
	meta: [
		{
			name: 'description',
			content: t('library.description'),
		},
	],
});
</script>

<template>
	<div>
		Content
	</div>
</template>
