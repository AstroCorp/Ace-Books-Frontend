<script setup lang="ts">
const { t } = useI18n();
const i18Markdown = useI18nMarkdown();

defineRouteRules({
	prerender: true
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

		<div class="flex-1 flex-col justify-center mt-6 mx-6">
			<div class="w-full lg:w-3/4 xl:w-2/3 p-4 mx-auto flex flex-col md:flex-row">
				<LegalMenu />

				<div class="bg-white bg-opacity-85 p-6 w-full rounded-md">
					<RenderMarkdown :value="i18Markdown('faqs.line_', 12)" />
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>
