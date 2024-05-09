<script setup lang="ts">
const options = ref([
	{
		icon: 'faqs',
		url: '/legal/faqs',
	},
	{
		icon: 'terms',
		url: '/legal/terms-of-service',
	},
	{
		icon: 'privacy',
		url: '/legal/privacy-notice',
	},
	{
		icon: 'cookies',
		url: '/legal/cookies-notice',
	},
]);
</script>

<template>
	<div class="w-full md:w-96 mr-4">
		<ul class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mb-4 md:mb-0 sticky top-5">
			<NuxtLinkLocale
				v-for="(option, key) in options"
				class="bg-white rounded-md p-4 md:mb-1 flex flex-row"
				:class="{
					'bg-opacity-80': false,
					'bg-opacity-90': true,
				}"
				:to="option.url"
			>
				<div class="w-10 h-10">
					<nuxt-icon :name="option.icon" class="flex w-full h-full text-blue-600" />
				</div>
				<div class="ml-4">
					<div class="font-semibold">{{ $t(`legal.title_${key + 1}`) }}</div>
					<p class="text-xs text-gray-600">{{ $t(`legal.description_${key + 1}`) }}</p>
				</div>
			</NuxtLinkLocale>
		</ul>
	</div>
</template>
