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

		<div class="mx-auto my-10 w-3/4 lg:w-2/3">
			<div class="flex flex-col mb-8">
				<h1 class="text-3xl sm:text-4xl lg:text-5xl font-thin italic tracking-wider mb-4 uppercase dark:text-white">{{ t('terms.title') }}</h1>
				<time class="border-l-3 pl-4 border-acebooks-green-100">{{ t('terms.date') }}</time>
			</div>

			<RenderMarkdown :value="i18Markdown('terms.line_', 25)" />
		</div>

		<Footer />
	</div>
</template>
