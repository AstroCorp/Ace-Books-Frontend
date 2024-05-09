<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/legal/faqs',
		es: '/legal/preguntas-frecuentes',
	},
});
</script>

<template>
	<div class="bg-books min-h-screen flex flex-col justify-between">
		<Header />

		<div class="flex-1 flex-col justify-center mt-6 mx-6">
			<div class="w-full lg:w-3/4 xl:w-2/3 p-4 mx-auto flex flex-col md:flex-row">
				<LegalMenu />

				<div class="bg-white bg-opacity-80 p-6 w-full rounded-md">
					<RenderMarkdown :value="$t('faqs.title')" />

					<RenderMarkdown :value="$t('faqs.date')" />

					<RenderMarkdown :value="$t('faqs.question_1')" />
					<RenderMarkdown :value="$t('faqs.answer_1')" />

					<RenderMarkdown :value="$t('faqs.question_2')" />
					<RenderMarkdown :value="$t('faqs.answer_2')" />

					<RenderMarkdown :value="$t('faqs.question_3')" />
					<RenderMarkdown :value="$t('faqs.answer_3')" />

					<RenderMarkdown :value="$t('faqs.question_4')" />
					<RenderMarkdown :value="$t('faqs.answer_4')" />

					<RenderMarkdown :value="$t('faqs.question_5')" />
					<RenderMarkdown :value="$t('faqs.answer_5')" />
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>
