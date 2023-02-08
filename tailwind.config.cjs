/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			textColor: {
				default: 'rgb(172, 178, 190)',
				bright: 'rgb(255, 255, 255)'
			},
			backgroundColor: {
				grey: 'rgb(34, 37, 42)',
				light_grey: 'rgb(41, 44, 51)',
				dark_grey: 'rgb(27, 29, 32)',
				button_grey: 'rgb(56, 63, 73)',
				button_light_grey: 'rgb(68, 75, 89)'
			},
			borderColor: {
				default: 'rgb(60, 67, 80)'
			}
		}
	},
	plugins: []
};
