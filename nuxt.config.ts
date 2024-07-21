// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-07-20',
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
	runtimeConfig: {
		// Private keys are only available on the server
		nodeEnv: process.env.NODE_ENV,
		nuxtSessionPassword: process.env.NUXT_SESSION_PASSWORD,
		backendUrl: process.env.BACKEND_URL,

		// Public keys that are exposed to the client
		public: {
			mailUsername: process.env.MAIL_USERNAME,
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
	modules: [
        "nuxt-icons",
        "@nuxtjs/i18n",
        "@nuxtjs/mdc",
        "@nuxt/image",
        "nuxt-auth-utils"
    ],
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