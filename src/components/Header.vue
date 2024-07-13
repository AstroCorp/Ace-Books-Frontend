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
	<div
		:class="{
			'min-h-[5.5rem]': applyNavStyle,
		}"
	>
		<header
			class="fixed w-full sm:bg-opacity-0 sm:h-auto z-20"
			:class="{
				'bg-white bg-opacity-90 h-full': applyNavStyle,
			}"
		>
			<nav class="flex items-center p-4 flex-wrap">
				<NuxtLinkLocale
					to="/"
					class="p-2 mr-4 inline-flex items-center text-4xl cursor-pointer"
					:class="{
						'text-gray-700 hover:text-darkblue-500': applyNavStyle,
						'text-white text-shadow shadow-black/75': !applyNavStyle,
					}"
				>
					Ace Books
				</NuxtLinkLocale>

				<button
					class="inline-flex sm:hidden ml-auto cursor-pointer"
					@click="toggleNav"
				>
					<nuxt-icon
						:name="navActive ? 'close' : 'menu'"
						class="flex w-8 h-8"
						:class="{
							'text-gray-700 hover:text-darkblue-500': applyNavStyle,
							'text-white': !applyNavStyle,
						}"
					/>
				</button>

				<div
					class="relative w-full sm:inline-flex sm:flex-grow sm:w-auto"
					:class="{
						'hidden': !applyNavStyle,
					}"
				>
					<ul
						class="sm:inline-flex sm:flex-row sm:ml-auto sm:w-auto w-full sm:items-center items-start flex flex-col sm:h-auto sm:text-right sm:mt-0"
						:class="{
							'text-center mt-8': applyNavStyle,
						}"
					>
						<li class="sm:inline-flex sm:w-auto w-full items-center justify-center">
							<NuxtLinkLocale to="/login">
								<MainButton class="p-2">
									{{ $t('header.sign_in') }}
								</MainButton>
							</NuxtLinkLocale>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	</div>
</template>
