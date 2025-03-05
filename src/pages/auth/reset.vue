<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();

defineI18nRoute({
	paths: {
		en: '/reset',
		es: '/restaurar',
	},
});

definePageMeta({
	middleware: ["disabled-with-session"],
});

useHead({
	title: t('home.title') + ' - ' + t('reset.title'),
	meta: [
		{
			name: 'description',
			content: t('reset.description'),
		},
	],
});

const resetForm = ref({
	email: '',
});
const fetching = ref(false);

const submitForm = async (event: Event) => {
	event.preventDefault();

	if (fetching.value) return;

	fetching.value = true;

	const response = await $fetch<any>(config.public.backendUrl + '/emails/reset-password', {
		method: 'POST',
		body: resetForm.value,
		ignoreResponseError: true,
	});

	if ('statusCode' in response && response.statusCode === 429) {
		useNuxtApp().$toast.error(t('reset.toast_error_429'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	if ('statusCode' in response && response.statusCode !== 200) {
		useNuxtApp().$toast.error(t('reset.toast_error'), {
			position: useNuxtApp().$toast.POSITION.TOP_CENTER,
		});

		fetching.value = false;

		return;
	}

	useNuxtApp().$toast.success(t('reset.toast_success'), {
		position: useNuxtApp().$toast.POSITION.TOP_CENTER,
	});

	fetching.value = false;
}
</script>

<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<div class="flex flex-row items-center lg:px-8 w-full min-h-svh sm:w-1/2 md:w-2/5 xl:w-2/6 bg-white">
				<form class="w-full px-6 py-4" @submit="submitForm">
					<NuxtLinkLocale to="/" class="flex flex-col items-center mb-4 xl:mb-5">
						<nuxt-icon name="logo" class="w-1/3" />
						<p class="mt-3 logo">Ace Books</p>
					</NuxtLinkLocale>

					<label class="block text-sm font-medium text-gray-700">{{ t('reset.email') }}</label>
					<div class="mt-1 mb-4">
						<Input
							v-model="resetForm.email"
							type="email"
							required
						/>
					</div>

					<Button
						type="submit"
						:disable="fetching"
					>
						<Spinner v-if="fetching" />
						<span v-else>{{ t('reset.reset') }}</span>
					</Button>

					<div class="mt-1.5">
						<span class="text-sm mr-1">{{ t('reset.question_1') }}</span>

						<NuxtLinkLocale
							to="/login"
							class="text-sm font-medium text-green-600 hover:text-green-500"
						>
							{{ t('reset.login') }}
						</NuxtLinkLocale>
					</div>

					<div class="flex items-center justify-start mt-1.5">
						<span class="text-sm mr-1">{{ t('reset.question_2') }}</span>

						<NuxtLinkLocale
							to="/register"
							class="text-sm font-medium text-green-600 hover:text-green-500"
						>
							{{ t('reset.register') }}
						</NuxtLinkLocale>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
