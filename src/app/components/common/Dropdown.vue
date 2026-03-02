<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

interface DropdownOption {
	label: string;
	value: string;
}

const {
	modelValue,
	options,
	triggerClass = 'appearance-none bg-transparent w-32 border border-white/80 rounded-md px-3 py-2 text-white flex items-center justify-between gap-2',
	contentClass = 'w-36 bg-acebooks-green-950/75 backdrop-blur-xs text-white rounded-md ring-0',
	itemClass = 'w-full px-4 py-2 cursor-pointer hover:bg-white/10 rounded-md',
} = defineProps<{
	modelValue: string;
	options: DropdownOption[];
	triggerClass?: string;
	contentClass?: string;
	itemClass?: string;
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const selectedOptionLabel = computed(() => {
	return options.find(option => option.value === modelValue)?.label ?? modelValue;
});

const items = computed<DropdownMenuItem[]>(() => {
	return options.map(option => ({
		label: option.label,
		class: itemClass,
		onSelect: () => emit('update:modelValue', option.value),
	}));
});
</script>

<template>
	<UDropdownMenu
		:items="items"
		:ui="{
			content: contentClass,
			viewport: 'w-full',
			item: 'w-full'
		}"
	>
		<button
			type="button"
			:class="triggerClass"
		>
			<span class="truncate">{{ selectedOptionLabel }}</span>
			<UIcon
				name="i-lucide-chevron-down"
				class="shrink-0 text-white/80"
			/>
		</button>
	</UDropdownMenu>
</template>
