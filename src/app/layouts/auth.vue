<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<main class="flex flex-row items-center lg:px-8 w-full min-h-svh sm:w-1/2 md:w-2/5 xl:w-2/6 bg-white dark:bg-black">
				<div class="w-full px-6 py-4">
					<NuxtLinkLocale to="/" class="flex flex-col items-center mb-4 xl:mb-5">
						<SvgIcon name="acebooks:logo" mode="svg" class="w-1/3 h-full fill-current dark:text-white" />
						<p class="mt-3 logo dark:text-white">Ace Books</p>
					</NuxtLinkLocale>

					<slot />
				</div>
			</main>
		</div>
	</div>
</template>
