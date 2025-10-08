<script setup lang="ts">
const { t } = useI18n();
const { logout } = useAuth();

defineI18nRoute({
	paths: {
		en: '/verify',
		es: '/verificar',
	},
});

definePageMeta({
	middleware: ["require-session"],
});

useHead({
	title: t('home.title') + ' - ' + t('verify.title'),
	meta: [
		{
			name: 'description',
			content: t('verify.description'),
		},
	],
});
</script>

<template>
	<div class="p-2">
		<div class="mb-4">Verify</div>
		<button class="border p-2 cursor-pointer hover:bg-slate-100" @click="logout">Logout</button>
	</div>
</template>
