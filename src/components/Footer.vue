<script setup lang="ts">
const { locale, locales, setLocaleCookie } = useI18n();
const { t } = useI18n();
const config = useRuntimeConfig();

const currentLocale = computed({
	get: () => locale.value,
	set: (value) => {
		locale.value = value;
		setLocaleCookie(value);
	},
});
</script>

<template>
	<footer class="bg-acebooks-green-800 text-white">
		<div class="px-2 py-8 text-center md:text-left">
			<div class="mx-auto md:w-3/4 flex flex-col md:flex-row">
				<div>
					<h3 class="text-lg font-semibold mb-2">{{ t('footer.legal') }}</h3>
					<ul>
						<li class="mb-2 hover:text-acebooks-green-500">
							<NuxtLinkLocale to="/legal/cookies-notice">{{ t('footer.cookies') }}</NuxtLinkLocale>
						</li>
						<li class="mb-2 hover:text-acebooks-green-500">
							<NuxtLinkLocale to="/legal/privacy-notice">{{ t('footer.privacy') }}</NuxtLinkLocale>
						</li>
						<li class="hover:text-acebooks-green-500">
							<NuxtLinkLocale to="/legal/terms-and-conditions">{{ t('footer.terms') }}</NuxtLinkLocale>
						</li>
					</ul>
				</div>

				<div class="mt-10 md:mt-0 md:ml-24">
					<h3 class="text-lg font-semibold  mb-2">{{ t('footer.support') }}</h3>
					<ul>
						<li class="mb-2 hover:text-acebooks-green-500">
							<NuxtLinkLocale to="/legal/faqs">{{ t('footer.faqs') }}</NuxtLinkLocale>
						</li>
						<li class="hover:text-acebooks-green-500">
							<a :href="`mailto:${config.public.mailUsername}`">{{ t('footer.contact') }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="bg-acebooks-green-950 px-2 py-4">
			<div class="mx-auto md:w-3/4 flex flex-col-reverse md:flex-row items-center">
				<div class="w-full md:w-4/5 mt-4 md:mt-0 text-center md:text-left">
					Copyright &copy; {{ new Date().getFullYear() }} Ace Books. {{ t('footer.copyright') }}
				</div>

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
