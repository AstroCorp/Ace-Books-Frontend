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
					'50': '#effef6',
					'100': '#d9ffea',
					'200': '#b5fdd6',
					'300': '#7cf9b7',
					'400': '#3cec90',
					'500': '#12d570',
					'600': '#08b159',
					'700': '#0b8a48',
					'800': '#0e6d3d',
					'900': '#0c4d2d',
					'950': '#01321a',
				},
				'acebooks-brown': {
					'50': '#f7f5ef',
					'100': '#ebe6d6',
					'200': '#d8cdb0',
					'300': '#c2af82',
					'400': '#b0955f',
					'500': '#a18251',
					'600': '#8a6944',
					'700': '#6d5038',
					'800': '#5e4535',
					'900': '#523c31',
					'950': '#2f2019',
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

