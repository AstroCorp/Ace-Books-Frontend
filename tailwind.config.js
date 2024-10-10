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
			fontFamily: {
				'Rubik': ['Rubik', 'sans-serif'],
				'Wittgenstein': ['Wittgenstein', 'serif'],
			},
			fontSize: {
				'logo': ['2.5rem', {
					lineHeight: '1',
				}],
			},
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
			colors: {
				'acebooks-green': {
					'50': '#f4faf3',
					'100': '#e5f4e4',
					'200': '#cbe8ca',
					'300': '#a0d5a0',
					'400': '#72bb72',
					'500': '#4a9d4b',
					'600': '#398039',
					'700': '#2f6630',
					'800': '#2a512b',
					'900': '#244325',
					'950': '#0f2410',
				},
				'acebooks-brown': {
					'50': '#f9f9f1',
					'100': '#eaecd9',
					'200': '#d4d8af',
					'300': '#c1c485',
					'400': '#babb72',
					'500': '#aaa456',
					'600': '#968949',
					'700': '#7d6c40',
					'800': '#685838',
					'900': '#574930',
					'950': '#302718',
				},
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

