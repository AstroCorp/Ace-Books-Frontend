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
				? 'w-36 bg-white text-green-950 rounded-md ring-0'
				: 'w-36 bg-green-950/75 backdrop-blur-xs text-white rounded-md ring-0',
			viewport: 'w-full',
			item: variation === 'solid'
				? 'w-full px-4 py-2 text-sm text-green-950 data-highlighted:text-green-950 data-[state=checked]:text-green-950 cursor-pointer hover:bg-green-100 rounded-md'
				: 'w-full px-4 py-2 text-sm text-white data-highlighted:text-white data-[state=checked]:text-white cursor-pointer hover:bg-green-800/80 rounded-md',
			itemLabel: variation === 'solid' ? 'text-green-950' : 'text-white',
			itemDescription: variation === 'solid' ? 'text-green-900/80' : 'text-white/80'
		}"
	>
		<Button
			type="button"
			:preset="variation"
			class="appearance-none rounded-md text-sm flex items-center justify-between gap-2"
			:class="{
				'w-32 px-3 py-2 border border-white/80 hover:bg-green-50/10': variation === 'outline',
				'w-auto': variation === 'solid'
			}"
		>
			<span class="truncate">{{ selectedOptionLabel }}</span>
			<SvgIcon
				name="i-fluent-chevron-down-32-filled"
				class="shrink-0 text-white/80"
			/>
		</Button>
		<template #item="{ item }">
			<div class="flex items-center gap-2">
				<UIcon
					v-if="item.icon"
					:name="item.icon"
					class="shrink-0 text-white/80"
				/>
				<span>{{ item.label }}</span>
			</div>
		</template>
	</UDropdownMenu>
</template>
