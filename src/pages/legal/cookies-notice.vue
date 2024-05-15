<script setup lang="ts">
const { t } = useI18n();
const i18Markdown = useI18nMarkdown();

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
	<div class="flex flex-col justify-between min-h-screen">
		<Header />

		<div class="flex-1 flex-col justify-center mt-6 mx-6">
			<div class="w-full lg:w-3/4 xl:w-2/3 p-4 mx-auto flex flex-col md:flex-row">
				<LegalMenu />

				<div class="bg-white bg-opacity-85 p-6 w-full rounded-md">
					<RenderMarkdown :value="i18Markdown('cookies.line_', 14)" />
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>
