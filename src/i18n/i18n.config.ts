import en from './en';
import es from './es';

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		en,
		es,
	},
}));
