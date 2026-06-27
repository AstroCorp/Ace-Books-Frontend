<script setup lang="ts">
const model = defineModel();
</script>

<template>
	<UInput
		v-model="model"
		:ui="{
			root: 'w-full',
			base: 'bg-acebooks-green-50 dark:text-white text-sm dark:bg-acebooks-green-750 w-full p-2 rounded-md',
		}"
	/>
</template>
