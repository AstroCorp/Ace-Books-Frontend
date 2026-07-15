<template>
	<div class="flex min-h-screen w-full flex-col justify-between overflow-x-clip">
		<HeaderUser />

		<main class="mx-auto w-full min-w-0 max-w-full flex-1 overflow-x-auto px-6 pt-20 pb-10 lg:w-3/4">
			<slot />
		</main>

		<Footer />
	</div>
</template>
