<script setup lang="ts">
defineProps<{
	isValid: boolean;
}>();
</script>

<template>
	<div
		class="flex items-center text-xs pt-1"
		:class="{
			'text-acebooks-error-background': !isValid,
			'text-acebooks-success-background': isValid,
		}"
	>
		<SvgIcon :name="isValid ? 'i-fluent-checkmark-20-regular' : 'i-fluent-dismiss-20-regular'" mode="svg" class="flex w-3 h-3 mr-1 fill-current" />
		<slot></slot>
	</div>
</template>
