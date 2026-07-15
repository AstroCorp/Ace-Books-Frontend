<script setup lang="ts">
const {
	preset = 'solid',
	type = 'button',
	disabled = false,
} = defineProps<{
	preset?: 'solid' | 'outline' | 'dropdown-outline';
	type?: 'submit' | 'button';
	disabled?: boolean;
}>();
</script>

<template>
	<UButton
		:type="type"
		:disabled="disabled"
		class="cursor-pointer! p-2 text-sm rounded-md transition duration-300 ease-in-out disabled:cursor-not-allowed"
		:class="{
			'text-shadow shadow-sm shadow-acebooks-shadow/70 border-2 font-medium text-acebooks-brand-text! border-acebooks-brand-text hover:bg-acebooks-brand-text/20': preset === 'outline',
			'text-acebooks-brand-text! bg-acebooks-brand hover:bg-acebooks-brand-hover disabled:bg-acebooks-brand-hover/80': preset === 'solid',
			'dark:text-shadow shadow-sm dark:shadow-acebooks-shadow/70 border text-acebooks-text-title! border-acebooks-border-strong dark:text-acebooks-brand-text! dark:border-acebooks-brand-text': preset === 'dropdown-outline',
			'w-full': type === 'submit',
		}"
	>
		<slot />
	</UButton>
</template>
