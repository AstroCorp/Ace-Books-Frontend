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
		class="cursor-pointer p-2 text-sm !text-white rounded-md transition duration-300 ease-in-out disabled:bg-acebooks-green-600/80 disabled:cursor-not-allowed"
		:class="{
			'text-shadow shadow-sm shadow-black/70 border-2 font-medium border-white hover:bg-white/20': preset === 'outline',
			'bg-acebooks-green-500 hover:bg-acebooks-green-600': preset === 'solid',
			'dark:text-shadow !text-acebooks-green-800 dark:!text-white shadow-sm dark:shadow-black/70 border border-acebooks-green-800 dark:border-white': preset === 'dropdown-outline',
			'w-full': type === 'submit',
		}"
	>
		<slot />
	</UButton>
</template>
