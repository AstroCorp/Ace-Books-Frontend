<script setup lang="ts">
interface Props {
	isValid: boolean;
}

defineProps<Props>();
</script>

<template>
	<div
		class="flex items-center text-xs pt-1"
		:class="{
			'text-red-500': !isValid,
			'text-green-500': isValid,
		}"
	>
		<nuxt-icon :name="isValid ? 'check' : 'error'" class="flex w-3 h-3 mr-1" />
		<slot></slot>
	</div>
</template>
