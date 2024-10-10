<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind, useScroll, useElementSize } from '@vueuse/core';

const body = ref<HTMLElement | null>(null);

const { height: windowHeight } = useElementSize(body);
const { y: topScroll } = useScroll(document);
const breakpoints = useBreakpoints(breakpointsTailwind);
const isResponsiveMenu = breakpoints.smaller('sm');
const { t } = useI18n();

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
	<header
		class="fixed w-full h-20 z-20 transition-all bg-acebooks-green-700 bg-opacity-0 duration-200"
		:class="{
			'h-full': applyNavStyle,
			'bg-opacity-75 backdrop-blur-sm': applyNavBackground || applyNavStyle,
		}"
	>
		<nav class="flex flex-col">
			<div class="flex p-4 h-20 justify-between items-center">
				<NuxtLinkLocale
					to="/"
					class="logo cursor-pointer text-white text-shadow shadow-black/70"
				>
					Ace Books
				</NuxtLinkLocale>

				<button
					class="sm:hidden cursor-pointer w-6 h-6"
					@click="toggleNav"
				>
					<nuxt-icon
						:name="navActive ? 'close' : 'menu'"
						class="flex w-full h-full text-white"
					/>
				</button>

				<NuxtLinkLocale class="hidden sm:block" to="/login">
					<Button class="p-2" variant="primary">
						{{ t('header.sign_in') }}
					</Button>
				</NuxtLinkLocale>
			</div>

			<div
				class="relative w-full sm:hidden"
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
							<Button class="p-2" variant="primary">
								{{ t('header.sign_in') }}
							</Button>
						</NuxtLinkLocale>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>
