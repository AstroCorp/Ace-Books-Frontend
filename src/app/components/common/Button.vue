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
		unstyled
		:type="type"
		:disabled="disabled"
		class="text-white! rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-green-800/80"
		:class="{
			'w-full h-10 px-4 py-2 border border-transparent text-sm font-medium shadow-xs bg-green-500 hover:bg-green-600 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-green-500': preset === 'solid',
			'text-shadow shadow-sm shadow-black/70 border-2 border-white bg-transparent hover:bg-white/20 active:bg-white/20 transition duration-300 ease-in-out p-2': preset === 'outline',
		}"
	>
		<slot />
	</UButton>
</template>
