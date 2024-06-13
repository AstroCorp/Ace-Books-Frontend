<script setup lang="ts">
const { locale, locales, setLocaleCookie } = useI18n();

const currentLocale = computed({
	get: () => locale.value,
	set: (value) => {
		locale.value = value;
		setLocaleCookie(value);
	},
});
</script>

<template>
	<footer class="text-white text-shadow text-center p-4">
		<p>Copyright &copy; {{ new Date().getFullYear() }} Ace Books. {{ $t('footer.copyright') }}</p>
		<!--
		<form>
			<select v-model="currentLocale" class="text-black">
				<option
					v-for="locale in locales"
					:key="locale.code"
					:selected="locale.code === currentLocale"
					:value="locale.code"
				>
					{{ locale.name }}
				</option>
			</select>
		</form>
		-->
	</footer>
</template>
