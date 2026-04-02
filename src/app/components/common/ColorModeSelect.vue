<script lang="ts" setup>
const { t } = useI18n();
const colorMode = useColorMode();

const items = computed(() => [
	{ label: t('footer.system'), value: 'system', icon: 'i-fluent-desktop-20-regular' },
	{ label: t('footer.light'), value: 'light', icon: 'i-fluent-weather-sunny-20-regular' },
	{ label: t('footer.dark'), value: 'dark', icon: 'i-fluent-weather-moon-20-regular' },
]);

const onUpdateColorMode = async (option: string) => {
	colorMode.preference = option;
}
</script>

<template>
	<Dropdown
		:model-value="colorMode.preference"
		:options="items"
		variation="outline"
		@update:model-value="onUpdateColorMode"
	/>
</template>
