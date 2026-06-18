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
		:modal="false"
		:ui="{
			content: variation === 'solid'
				? 'w-36 rounded-md ring-0'
				: 'w-36 rounded-md ring-0 backdrop-blur-xs',
			viewport: 'w-full',
			item: variation === 'solid'
				? 'w-full px-4 py-2 text-sm cursor-pointer rounded-md'
				: 'w-full px-4 py-2 text-sm cursor-pointer rounded-md'
		}"
	>
		<Button
			type="button"
			:preset="variation"
			class="appearance-none rounded-md text-sm flex items-center justify-between gap-2"
			:class="{
				'w-32 px-3 py-2 border': variation === 'outline',
				'w-auto': variation === 'solid'
			}"
		>
			<span class="truncate">{{ selectedOptionLabel }}</span>
			<SvgIcon
				name="i-fluent-chevron-down-32-filled"
				class="shrink-0"
			/>
		</Button>
		<template #item="{ item }">
			<div class="flex items-center gap-2">
				<UIcon
					v-if="item.icon"
					:name="item.icon"
					class="shrink-0"
				/>
				<span>{{ item.label }}</span>
			</div>
		</template>
	</UDropdownMenu>
</template>
