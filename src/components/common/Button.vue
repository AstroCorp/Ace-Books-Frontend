<script setup lang="ts">
defineProps<{
	class: string;
	variant: 'primary' | 'secondary';
}>();
</script>

<template>
	<button
		:class="`text-white text-shadow shadow shadow-black/70 border-2 rounded-md hover:bg-white/20 transition duration-300 ease-in-out ${$props.class}`"
	>
		<slot />
	</button>
</template>
