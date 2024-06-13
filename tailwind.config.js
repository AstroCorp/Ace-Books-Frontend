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
			boxShadow: {
                'inner-full': 'inset 0 0 30px rgb(34 34 34 / 25%)',
            },
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

