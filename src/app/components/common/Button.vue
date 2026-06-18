<script setup lang="ts">
const {
	preset = 'solid',
	type = 'button',
	disabled = false,
} = defineProps<{
	preset?: 'solid' | 'outline';
	type?: 'submit' | 'button';
	disabled?: boolean;
}>();
</script>

<template>
	<UButton
		:type="type"
		:disabled="disabled"
	>
		<slot />
	</UButton>
</template>
