<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components';
import { useElementBounding, useWindowScroll } from '@vueuse/core';

const props = defineProps<{
	items: { text: string, value: string; }[];
}>();

const model = defineModel();
const isOpen = ref(false);
const dropdown = ref<HTMLElement | null>(null);
const dropdownMenu = ref<HTMLElement | null>(null);

const { x: dropdownX, y: dropdownY, width: dropdownWidth } = useElementBounding(dropdown);
const { height: dropdownMenuHeight, width: dropdownMenuWidth } = useElementBounding(dropdownMenu);
const { x: windowX, y: windowY } = useWindowScroll();

const top = computed(() => {
	const MARGIN = 8;

	if (!isOpen.value) return 0;

	return windowY.value + dropdownY.value - dropdownMenuHeight.value - MARGIN;
});
const left = computed(() => {
	if (!isOpen.value) return 0;

	return dropdownX.value + windowX.value - ((dropdownMenuWidth.value - dropdownWidth.value) / 2);
});

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const closeDropdown = (ev: any) => {
	const isDropdownButton = ev.target.closest('.dropdown-button');

	if (isDropdownButton) return;

	isOpen.value = false;
};

const selectItem = (item: string) => {
	console.log(item);
	model.value = item;
	isOpen.value = false;
};
</script>

<template>
	<div class="relative" ref="dropdown" @click="toggleDropdown">
		<div class="dropdown-button">
			<slot name="trigger" :selected="model"></slot>
		</div>
		<Teleport to="#teleports">
			<OnClickOutside @trigger="closeDropdown">
				<div
					ref="dropdownMenu"
					class="absolute bg-white/50 rounded-md border border-white text-black backdrop-blur-xs shadow-lg z-50 flex flex-col"
					:class="{
						'pointer-events-none invisible': !isOpen,
					}"
					:style="{
						left: left + 'px',
						top: top + 'px',
					}"
				>
					<slot
						name="item"
						v-for="(item, index) in items"
						:key="index"
						:item="item"
						:onClick="selectItem"
					></slot>
				</div>
			</OnClickOutside>
		</Teleport>
	</div>
</template>
