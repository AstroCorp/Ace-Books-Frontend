<script lang="ts" setup>
const {
	name,
	mode = 'css',
	class: className
} = defineProps<{
	name: string;
	mode?: 'css' | 'svg';
	class?: string;
}>();
</script>

<template>
	<Icon :name="'acebooks:' + name" :mode="mode" :class="className" />
</template>
