<script setup lang="ts">
const model = defineModel();
</script>

<template>
	<input
		v-model="model"
		class="shadow-sm block w-full h-10 sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
	/>
</template>
