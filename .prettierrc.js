module.exports = {
	arrowParens: 'always',
	bracketSpacing: true,
	jsxSingleQuote: true,
	printWidth: 80,
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	trailingComma: 'none',
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: './tailwind.config.js'
};
