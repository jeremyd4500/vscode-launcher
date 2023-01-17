/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				// backgrounds
				grey: 'rgb(34, 37, 42)',
				light_grey: 'rgb(41, 44, 51)',
				dark_grey: 'rgb(27, 29, 32)',
				button_bg: 'rgb(56, 63, 73)',
				button_bg_hover: 'rgb(68, 75, 89)',
				// text colors
				text_default: 'rgb(172, 178, 190)',
				text_bright: 'rgb(255, 255, 255)',
				// other
				border: 'rgb(60, 67, 80)'
			}
		}
	},
	plugins: []
};
