import { createSharedComposable } from "@vueuse/core";

const useI18nMarkdown = createSharedComposable(() => {
	const { t, locale } = useI18n();

	return (key: string, lines: number) => {
		const translations = [];

		for (let i = 1; i <= lines; i++) {
			translations.push(t(`${key}${i}`, locale.value));
		}

		return translations.reduce((accumulator: string, currentValue: string) => {
			// Si es parte de una tabla solo se agrega un salto de línea, si no, se agregan dos para
			// que se genere un <p> independiente.
			const lineBreak = currentValue[currentValue.length - 1] === '|'  ? '\n' : '\n\n';

			return accumulator + lineBreak + currentValue;
		});
	};
});

export default useI18nMarkdown;
