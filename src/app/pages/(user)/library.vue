<script setup lang="ts">
const { t } = useI18n();
const { session, user, logout } = useAuth();

defineI18nRoute({
	paths: {
		en: '/library',
		es: '/biblioteca',
	},
});

definePageMeta({
	layout: 'user',
	middleware: ["require-session", "require-email-verified"],
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
	<div class="max-w-full overflow-hidden p-2">
		<div class="mb-4 max-w-full break-all text-sm">{{ session }}</div>
		<div class="mb-4 max-w-full break-all text-sm">{{ user }}</div>
		<button class="border border-acebooks-border p-2 cursor-pointer hover:bg-acebooks-surface" @click="logout">Logout</button>
	</div>
</template>
