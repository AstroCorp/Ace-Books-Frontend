<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind, useScroll, useElementSize } from '@vueuse/core';

const body = ref<HTMLElement | null>(null);
const { height: windowHeight } = useElementSize(body);
const { y: topScroll } = useScroll(document);
const breakpoints = useBreakpoints(breakpointsTailwind);
const isResponsiveMenu = breakpoints.smaller('sm');

const navActive = ref(false);

const toggleNav = () => {
	navActive.value = !navActive.value;
};

const applyNavStyle = computed(() => {
	return navActive.value && isResponsiveMenu.value;
});

const applyNavBackground = computed(() => {
	return topScroll.value > windowHeight.value * 0.15;
});

onBeforeMount(() => {
	body.value = document.body;
});
</script>

<template>
	<div
		:class="{
			'min-h-[5.5rem]': applyNavStyle,
		}"
	>
		<header
			class="fixed w-full sm:h-auto z-20 transition-all bg-green-900 bg-opacity-0 duration-200"
			:class="{
				'h-full': applyNavStyle,
				'bg-opacity-75 backdrop-blur-sm': applyNavBackground || applyNavStyle,
			}"
		>
			<nav class="flex items-center p-4 flex-wrap">
				<NuxtLinkLocale
					to="/"
					class="p-2 mr-4 inline-flex items-center text-4xl cursor-pointer text-white text-shadow shadow-black/70"
				>
					Ace Books
				</NuxtLinkLocale>

				<button
					class="inline-flex sm:hidden ml-auto cursor-pointer"
					@click="toggleNav"
				>
					<nuxt-icon
						:name="navActive ? 'close' : 'menu'"
						class="flex w-8 h-8 text-white"
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
