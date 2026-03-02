<script lang="ts" setup>
import { en, es } from '@nuxt/ui/locale';

const { locale, locales, setLocale } = useI18n();

const localeOptions = computed(() => {
	const availableCodes = new Set<string>(locales.value.map(localeItem => localeItem.code));
	return [en, es].filter(localeItem => availableCodes.has(localeItem.code));
});

const onUpdateLocale = async (value: string) => {
	const nextLocale = value as typeof locale.value;
	await setLocale(nextLocale);
};
</script>

<template>
	<ULocaleSelect
		:model-value="locale"
		:locales="localeOptions"
		:search-input="false"
		variant="none"
		class="w-32 border border-white/80 rounded-md"
		:ui="{
			value: 'truncate',
			base: 'px-3 py-2',
			trailingIcon: 'text-white/80',
			content: 'w-36 bg-acebooks-green-950/75 backdrop-blur-xs text-white rounded-md ring-0',
			viewport: 'w-full',
			item: 'w-full px-4 py-2 cursor-pointer hover:bg-white/10 rounded-md'
		}"
		@update:model-value="onUpdateLocale"
	/>
</template>
