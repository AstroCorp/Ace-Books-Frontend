// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: 'src/',
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	devtools: {
		enabled: import.meta.env.NODE_ENV === "development",
	},
	experimental: {
		inlineRouteRules: true,
	},
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
		},
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 100,
			},
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	modules: ["nuxt-icons", "@nuxtjs/i18n", "@nuxtjs/mdc", "@nuxt/image"],
	i18n: {
		vueI18n: './src/i18n/i18n.config.ts',
		locales: [
			{
				code: 'en',
				name: 'English',
			},
			{
				code: 'es',
				name: 'Español',
			},
		],
		defaultLocale: 'en',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'language',
			redirectOn: 'root',
			alwaysRedirect: true,
		},
	},
});
