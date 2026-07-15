<script setup lang="ts">
defineProps<{
	titleKey: string;
	dateKey: string;
}>();

const { t } = useI18n();
</script>

<template>
	<div class="flex flex-col justify-between min-h-screen">
		<Header />

		<main class="mx-auto my-10 w-3/4 lg:w-2/3">
			<header class="flex flex-col mb-8">
				<h1 class="text-3xl sm:text-4xl lg:text-5xl font-thin italic tracking-wider mb-4 uppercase text-acebooks-text-title">
					{{ t(titleKey) }}
				</h1>
				<time class="border-l-3 pl-4 border-acebooks-border text-acebooks-text-subtitle">
					{{ t(dateKey) }}
				</time>
			</header>

			<slot />
		</main>

		<Footer />
	</div>
</template>
