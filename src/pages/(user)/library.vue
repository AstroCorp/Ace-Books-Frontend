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
	<div class="p-2">
		<div class="mb-4">{{ session }}</div>
		<div class="mb-4">{{ user }}</div>
		<button class="border p-2 cursor-pointer hover:bg-slate-100" @click="logout">Logout</button>
	</div>
</template>
