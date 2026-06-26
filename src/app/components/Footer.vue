<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();
</script>

<template>
	<footer class="bg-acebooks-green-50 dark:bg-acebooks-green-800 py-16">
		<div class="mx-auto md:w-3/4 flex flex-col md:flex-row text-acebooks-green-800 dark:text-white">
			<div>
				<h3 class="text-xl uppercase mb-2">{{ t('footer.legal') }}</h3>
				<ul class="font-light">
					<li class="mb-2 hover:underline">
						<NuxtLinkLocale to="/legal/cookies-notice">{{ t('footer.cookies') }}</NuxtLinkLocale>
					</li>
					<li class="mb-2 hover:underline">
						<NuxtLinkLocale to="/legal/privacy-notice">{{ t('footer.privacy') }}</NuxtLinkLocale>
					</li>
					<li class="hover:underline">
						<NuxtLinkLocale to="/legal/terms-and-conditions">{{ t('footer.terms') }}</NuxtLinkLocale>
					</li>
				</ul>
			</div>

			<div class="mt-10 md:mt-0 md:ml-24">
				<h3 class="text-xl uppercase mb-2">{{ t('footer.support') }}</h3>
				<ul class="font-light">
					<li class="mb-2 hover:underline">
						<NuxtLinkLocale to="/legal/faqs">{{ t('footer.faqs') }}</NuxtLinkLocale>
					</li>
					<li class="hover:underline">
						<a :href="`mailto:${config.public.mailUsername}`">{{ t('footer.contact') }}</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mx-auto md:w-3/4 border-t border-gray-300 my-8"></div>

		<div class="mx-auto md:w-3/4 flex flex-col-reverse md:flex-row items-center">
			<div class="w-full md:w-4/5 mt-4 text-sm md:mt-0 text-center md:text-left text-acebooks-green-800 dark:text-white">
				Copyright &copy; {{ new Date().getFullYear() }} Ace Books. {{ t('footer.copyright') }}
			</div>

			<div class="w-full md:w-1/5 flex flex-row justify-center md:justify-end gap-2">
				<LocaleSelect />
				<ClientOnly>
					<ColorModeSelect />
				</ClientOnly>
			</div>
		</div>
	</footer>
</template>
