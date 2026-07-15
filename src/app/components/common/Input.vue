<script setup lang="ts">
const model = defineModel();
</script>

<template>
	<UInput
		v-model="model"
		:ui="{
			root: 'w-full',
			base: 'bg-acebooks-input-background text-acebooks-input-text border border-acebooks-input-border text-sm w-full p-2 rounded-md',
		}"
	/>
</template>
