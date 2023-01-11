/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors: {
			one_dark_light_grey: 'rgb(41, 44, 51)',
			one_dark_grey: 'rgb(34, 37, 42)',
			one_dark_text: 'rgb(172, 178, 190)'
		},
		extend: {}
	},
	plugins: []
};
