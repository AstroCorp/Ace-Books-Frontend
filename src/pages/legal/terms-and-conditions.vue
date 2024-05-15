<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/legal/terms-and-conditions',
		es: '/legal/terminos-y-condiciones',
	},
});

const i18Markdown = useI18nMarkdown();
</script>

<template>
	<div class="flex flex-col justify-between min-h-screen">
		<Header />

		<div class="flex-1 flex-col justify-center mt-6 mx-6">
			<div class="w-full lg:w-3/4 xl:w-2/3 p-4 mx-auto flex flex-col md:flex-row">
				<LegalMenu />

				<div class="bg-white bg-opacity-85 p-6 w-full rounded-md">
					<RenderMarkdown :value="i18Markdown('terms.line_', 27)" />
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>
