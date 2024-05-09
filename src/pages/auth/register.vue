<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/register',
		es: '/registrarse',
	},
});
</script>

<template>
	<div class="bg-books h-screen flex flex-col">
		<Header />

		<div class="h-screen flex flex-col justify-center">
			Register
		</div>

		<Footer />
	</div>
</template>

