<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind, useScroll } from '@vueuse/core';

const { floating = false } = defineProps<{
	floating?: boolean;
}>();

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
	return topScroll.value > 0;
});
</script>

<template>
	<header
		class="w-full h-20 z-20 transition-all duration-200"
		:class="{
			'h-full': applyNavStyle,
			'fixed': floating,
			'bg-acebooks-nav-background/80 sticky top-0': !floating,
			'bg-acebooks-nav-background/80 backdrop-blur-xs': applyNavBackground || applyNavStyle,
		}"
	>
		<nav class="flex flex-col">
			<div class="flex p-4 h-20 justify-between items-center">
				<NuxtLinkLocale
					to="/"
					class="logo cursor-pointer text-acebooks-brand-text text-shadow shadow-black/70"
				>
					Ace Books
				</NuxtLinkLocale>

				<button
					class="sm:hidden cursor-pointer w-6 h-6"
					@click="toggleNav"
				>
					<SvgIcon
						:name="navActive ? 'i-fluent-dismiss-20-regular' : 'i-fluent-navigation-20-regular'"
						mode="svg"
						class="flex w-full h-full text-acebooks-brand-text fill-current"
					/>
				</button>

				<NuxtLinkLocale class="hidden sm:block" to="/login">
					<Button preset="outline">
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
							<Button preset="outline">
								{{ t('header.sign_in') }}
							</Button>
						</NuxtLinkLocale>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>
