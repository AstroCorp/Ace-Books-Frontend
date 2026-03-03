<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

interface DropdownOption {
	label: string;
	value: string;
}

const {
	modelValue,
	options,
	variation = 'outline',
} = defineProps<{
	modelValue: string;
	options: DropdownOption[];
	variation?: 'outline' | 'solid';
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const selectedOptionLabel = computed(() => {
	return options.find(option => option.value === modelValue)?.label ?? modelValue;
});

const items = computed((): DropdownMenuItem[] => {
	return options.map(option => ({
		label: option.label,
		onSelect: () => emit('update:modelValue', option.value),
	}));
});
</script>

<template>
	<UDropdownMenu
		:items="items"
		:ui="{
			content: variation === 'solid'
				? 'w-36 bg-white text-acebooks-green-950 rounded-md ring-0'
				: 'w-36 bg-acebooks-green-950/75 backdrop-blur-xs text-white rounded-md ring-0',
			viewport: 'w-full',
			item: variation === 'solid'
				? 'w-full px-4 py-2 text-sm cursor-pointer hover:bg-acebooks-green-100 rounded-md'
				: 'w-full px-4 py-2 text-sm cursor-pointer hover:bg-white/10 rounded-md'
		}"
	>
		<Button
			type="button"
			:preset="variation"
			class="appearance-none rounded-md text-sm flex items-center justify-between gap-2"
			:class="{
				'w-32 px-3! py-2! border! border-white/80!': variation === 'outline',
				'w-auto!': variation === 'solid'
			}"
		>
			<span class="truncate">{{ selectedOptionLabel }}</span>
			<UIcon
				name="i-lucide-chevron-down"
				class="shrink-0 text-white/80"
			/>
		</Button>
	</UDropdownMenu>
</template>
