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
}
</script>

<template>
	<Dropdown
		:model-value="locale"
		:options="localeOptions"
		variation="outline"
		@update:model-value="onUpdateLocale"
	/>
</template>
