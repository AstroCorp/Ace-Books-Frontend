<script setup lang="ts">
import { ref, computed } from 'vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const route = useRoute();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isResponsiveMenu = breakpoints.smaller('sm');

const navActive = ref(false);

const toggleNav = () => {
	navActive.value = !navActive.value;
};

const applyNavStyle = computed(() => {
	return navActive.value && isResponsiveMenu.value;
});
</script>

<template>
	<header
		class="md:bg-opacity-0 md:h-auto"
		:class="{
			'absolute bg-white bg-opacity-90 h-full w-full': applyNavStyle,
		}"
	>
		<nav class="flex items-center p-4 flex-wrap">
			<NuxtLinkLocale
				to="/"
				class="p-2 mr-4 inline-flex items-center text-white md:text-white text-4xl cursor-pointer"
				:class="{
					'text-gray-700 hover:text-darkblue-500': applyNavStyle,
					'text-shadow': !applyNavStyle,
				}"
			>
				Ace Books
			</NuxtLinkLocale>

			<button
				class="text-white inline-flex md:hidden ml-auto cursor-pointer"
				:class="{
					'text-gray-700 hover:text-darkblue-500': applyNavStyle,
				}"
				@click="toggleNav"
			>
				<nuxt-icon name="menu" class="w-8 h-8" />
			</button>

			<div
				class="relative w-full md:inline-flex md:flex-grow md:w-auto"
				:class="{
					'hidden': !applyNavStyle,
				}"
			>
				<ul
					class="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto md:text-right md:mt-0"
					:class="{
						'text-center mt-8': applyNavStyle,
					}"
				>
					<li
						class="md:inline-flex md:w-auto w-full items-center justify-center md:mx-6"
						:class="{
							'mt-5 mb-8 md:my-0 text-gray-700 hover:text-darkblue-500': applyNavStyle,
						}"
					>
						<NuxtLinkLocale
							class="md:text-white p-2 hover:underline"
							:class="{
								'text-gray-700 hover:text-darkblue-500': applyNavStyle,
							}"
							:to="route.path.includes('legal') ? '/' : '/legal/faqs'"
						>
							{{ $t(route.path.includes('legal') ? 'header.home' : 'header.faqs') }}
						</NuxtLinkLocale>
					</li>

					<li class="md:inline-flex md:w-auto w-full items-center justify-center">
						<NuxtLinkLocale
							class="md:text-white md:border-white p-2 border-2 rounded-md bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out"
							:class="{
								'text-gray-700 border-gray-700': applyNavStyle,
							}"
							to="/login"
						>
							{{ $t('header.sign_in') }}
						</NuxtLinkLocale>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>
