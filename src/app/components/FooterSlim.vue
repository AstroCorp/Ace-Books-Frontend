<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<footer class="flex flex-col-reverse items-center">
		<div class="w-full mt-4 text-sm text-center dark:text-white">
			Copyright &copy; {{ new Date().getFullYear() }} Ace Books. {{ t('footer.copyright') }}
		</div>

		<div class="w-full flex flex-row justify-center gap-2">
			<LocaleSelect />
			<ClientOnly>
				<ColorModeSelect />
			</ClientOnly>
		</div>
	</footer>
</template>
