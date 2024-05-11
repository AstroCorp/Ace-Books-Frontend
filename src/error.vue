<script setup lang="ts">
import type { NuxtError } from '#app';

interface Props {
	error: NuxtError;
}

defineProps<Props>();

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="bg-books h-screen flex flex-col">
		<header class="md:bg-opacity-0 md:h-auto">
			<nav class="flex items-center p-4 flex-wrap">
				<button
					@click="handleError"
					class="p-2 mr-4 inline-flex items-center text-white md:text-white text-4xl cursor-pointer text-shadow"
				>
					Ace Books
				</button>
			</nav>
		</header>

		<div class="h-screen flex flex-col justify-center">
			<article class="flex flex-col p-4 items-center text-center">
				<h1 class="text-9xl text-white text-opacity-60 mb-6">{{ error.statusCode }}</h1>

				<button
					@click="handleError"
					class="text-white px-4 py-3 border-2 rounded-md uppercase bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out"
				>
					{{ $t('error.button') }}
				</button>
			</article>
		</div>

		<Footer />
	</div>
</template>
