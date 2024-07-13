<script setup lang="ts">
const { locale, locales, setLocaleCookie } = useI18n();
const { t } = useI18n();

const currentLocale = computed({
	get: () => locale.value,
	set: (value) => {
		locale.value = value;
		setLocaleCookie(value);
	},
});
</script>

<template>
	<footer class="text-white">
		<div class="bg-green-900 px-2 py-8">
			<div class="mx-auto md:w-3/4 flex flex-row">
				<div>
					<h3 class="text-lg font-semibold text-gray-100">{{ t('footer.legal') }}</h3>
					<ul class="text-gray-300">
						<li>{{ t('footer.cookies') }}</li>
						<li>{{ t('footer.privacy') }}</li>
						<li>{{ t('footer.terms') }}</li>
					</ul>
				</div>

				<div class="ml-8">
					<h3 class="text-lg font-semibold text-gray-100">{{ t('footer.support') }}</h3>
					<ul class="text-gray-300">
						<li>{{ t('footer.faqs') }}</li>
						<li>{{ t('footer.contact') }}</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="bg-black px-2 py-4">
			<div class="mx-auto md:w-3/4 flex flex-col-reverse md:flex-row items-center">
				<div class="w-full md:w-4/5 mt-4 md:mt-0 text-center md:text-left">Copyright &copy; {{ new Date().getFullYear() }} Ace Books. {{ $t('footer.copyright') }}</div>

				<div class="w-full md:w-1/5 flex flex-row justify-center md:justify-end">
					<Dropdown v-model="currentLocale" :items="locales.map(localeObj => ({ text: localeObj.name || localeObj.code, value: localeObj.code }))">
						<template #trigger="{ selected }">
							<button class="border border-white p-2 rounded">
								{{ locales.find(localeObj => localeObj.code === selected)?.name || 'Select an option' }}
							</button>
						</template>

						<template #item="{ item, onClick }">
							<button @click="() => onClick(item.value)" class="w-32 px-4 py-2 cursor-pointer hover:bg-black/10">
								{{ item.text }}
							</button>
						</template>
					</Dropdown>
				</div>
			</div>
		</div>
	</footer>
</template>
