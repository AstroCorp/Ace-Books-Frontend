<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

interface DropdownOption {
	label: string;
	value: string;
}

const {
	modelValue,
	options,
} = defineProps<{
	modelValue: string;
	options: DropdownOption[];
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const selectedOptionLabel = computed(() => {
	return options.find((option: DropdownOption) => option.value === modelValue)?.label ?? modelValue;
});

const items = computed((): DropdownMenuItem[] => {
	return options.map((option: DropdownOption) => ({
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
			content: 'w-36 rounded-md bg-acebooks-surface-elevated/80 backdrop-blur-xs shadow-md shadow-acebooks-shadow/25',
			viewport: 'w-full',
			item: 'w-full px-4 py-2 text-sm cursor-pointer rounded-md hover:bg-acebooks-brand dark:hover:bg-acebooks-brand-hover hover:text-acebooks-brand-text',
		}"
	>
		<Button
			type="button"
			preset="dropdown-outline"
			class="appearance-none rounded-md text-sm flex items-center justify-between gap-2"
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
