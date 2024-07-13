const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/components/**/*.{js,vue,ts}",
		"./src/layouts/**/*.vue",
		"./src/pages/**/*.vue",
		"./src/plugins/**/*.{js,ts}",
		"./src/app.vue",
		"./src/error.vue",
	],
	theme: {
		extend: {
			textShadow: {
				DEFAULT: '0 2px 5px var(--tw-shadow-color)',
			},
			keyframes: {
				'pulse-effect': {
					'0%': { transform: 'scale(1, 1)' },
					'50%': { opacity: '0.3' },
					'100%': { transform: 'scale(1.5)', opacity: '0' },
				},
			},
			animation: {
				'pulse-v2': 'pulse-effect 1.2s ease infinite !important',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
	],
}

