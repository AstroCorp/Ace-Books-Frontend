<script setup lang="ts">
const route = useRoute();
const localePath = useLocalePath();

const options = ref([
	{
		icon: 'faqs',
		url: localePath('/legal/faqs'),
	},
	{
		icon: 'terms',
		url: localePath('/legal/terms-and-conditions'),
	},
	{
		icon: 'privacy',
		url: localePath('/legal/privacy-notice'),
	},
	{
		icon: 'cookies',
		url: localePath('/legal/cookies-notice'),
	},
]);
</script>

<template>
	<div class="w-full md:w-96 mr-4">
		<ul class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mb-4 md:mb-0 sticky top-5">
			<NuxtLinkLocale
				v-for="(option, key) in options"
				class="rounded-md p-4 md:mb-1 flex flex-row"
				:class="{
					'bg-slate-100 bg-opacity-70': route.path !== option.url,
					'bg-white bg-opacity-85': route.path === option.url,
				}"
				:to="option.url"
			>
				<div class="flex justify-center items-center">
					<nuxt-icon :name="option.icon" class="flex h-10 text-blue-600 opacity-90" />
				</div>
				<div class="ml-4">
					<div class="font-semibold">{{ $t(`legal.title_${key + 1}`) }}</div>
					<p class="text-xs text-gray-600">{{ $t(`legal.description_${key + 1}`) }}</p>
				</div>
			</NuxtLinkLocale>
		</ul>
	</div>
</template>
