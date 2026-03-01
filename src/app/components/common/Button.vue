<script setup lang="ts">
const {
	preset = 'auth',
	type = 'button',
	disabled = false,
} = defineProps<{
	preset?: 'auth' | 'landing';
	type?: 'submit' | 'button';
	disabled?: boolean;
}>();
</script>

<template>
	<UButton
		unstyled
		:type="type"
		:disabled="disabled"
		class="text-white rounded-md cursor-pointer disabled:cursor-not-allowed"
		:class="{
			'w-full h-10 px-4 py-2 border border-transparent text-sm font-medium shadow-xs bg-acebooks-green-600 hover:bg-acebooks-green-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-acebooks-green-500': preset === 'auth',
			'text-shadow shadow-sm shadow-black/70 border-2 border-white bg-transparent hover:bg-white/20 active:bg-white/20 transition duration-300 ease-in-out p-2': preset === 'landing',
		}"
	>
		<slot />
	</UButton>
</template>
