<script setup lang="ts">
defineProps<{
	isValid: boolean;
}>();
</script>

<template>
	<div
		class="flex items-center text-xs pt-1"
		:class="{
			'text-red-500': !isValid,
			'text-green-500': isValid,
		}"
	>
		<SvgIcon :name="isValid ? 'check' : 'error'" mode="svg" class="flex w-3 h-3 mr-1 fill-current" />
		<slot></slot>
	</div>
</template>
