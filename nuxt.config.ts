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
		enabled: process.env.NUXT_ENV === "development",
	},
	experimental: {
		inlineRouteRules: true,
	},
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/png', href: process.env.NUXT_ENV === "development" ? '/favicon_dev.png' : '/favicon.png' }],
		},
	},
	// Github Actions no reconoce correctamente que se hará un deploy a Vercel
	// por lo que se debe especificar el preset de Vercel
	nitro: {
		preset: 'vercel',
	},
	runtimeConfig: {
		// Private keys, se exponen en el servidor
		nuxtEnv: process.env.NUXT_ENV,
		nuxtSessionName: process.env.NUXT_SESSION_NAME,
		nuxtSessionPassword: process.env.NUXT_SESSION_PASSWORD,
		nuxtSessionTime: process.env.NUXT_SESSION_TIME,

		// Public keys, se exponen en el cliente
		public: {
			backendUrl: process.env.BACKEND_URL,
			frontendUrl: process.env.FRONTEND_URL,
			mailUsername: process.env.MAIL_USERNAME,
		},

		session: {
			name: process.env.NUXT_SESSION_NAME,
			password: process.env.NUXT_SESSION_PASSWORD,
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
		"@nuxtjs/i18n",
		"@nuxt/image",
		"@nuxtjs/mdc",
		"nuxt-auth-utils",
		"nuxt-icons",
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
	// Para servir nosotros las imágenes y no depender de una API de vercel
	image: {
		provider: 'ipx',
		domains: [process.env.FRONTEND_URL || 'http://localhost:3000'],
	},
});
