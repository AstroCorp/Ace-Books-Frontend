<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/login',
		es: '/iniciar-sesion',
	},
});
</script>

<template>
	<div class="bg-books h-screen flex flex-col">
		<Header />

		<div class="h-screen flex flex-col justify-center">
			Login
		</div>

		<Footer />
	</div>
</template>
