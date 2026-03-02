<script lang="ts" setup>
import { en, es } from '@nuxt/ui/locale';

const { locale, locales, setLocale } = useI18n();

const localeOptions = computed(() => {
	const availableCodes = new Set<string>(locales.value.map(localeItem => localeItem.code));
	return [en, es]
		.filter(localeItem => availableCodes.has(localeItem.code))
		.map(localeItem => ({
			value: localeItem.code,
			label: localeItem.name,
		}));
});

const onUpdateLocale = async (value: string) => {
	const nextLocale = value as typeof locale.value;
	await setLocale(nextLocale);
};
</script>

<template>
	<Dropdown
		:model-value="locale"
		:options="localeOptions"
		trigger-class="w-32 border border-white/80 rounded-md px-3 py-2 text-sm text-white flex items-center justify-between gap-2"
		content-class="w-36 bg-acebooks-green-950/75 backdrop-blur-xs text-white rounded-md ring-0"
		item-class="w-full px-4 py-2 text-sm cursor-pointer hover:bg-white/10 rounded-md"
		@update:model-value="onUpdateLocale"
	/>
</template>
