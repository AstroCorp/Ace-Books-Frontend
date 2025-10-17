<script setup lang="ts">
const {
	type = 'button',
	disable = false,
	fetching = false,
} = defineProps<{
	type?: 'submit' | 'button';
	disable?: boolean;
	fetching?: boolean;
}>();
</script>

<template>
	<button
		:type="type"
		:disable="fetching || disable"
		class="w-full h-10 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-xs text-white bg-green-600 hover:bg-green-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
	>
		<Spinner v-if="fetching" />
		<slot v-else />
	</button>
</template>
