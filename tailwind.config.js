// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: {
				100: '#f3f6f9',
				200: '#7a7c85'
			},
			orange: '#fdbf35',
			primary: {
				100: '#cfcfcf',
				200: '#9f9f9f',
				300: '#6e6f70',
				400: '#3e3f40',
				500: '#0e0f10',
				600: '#0b0c0d',
				700: '#08090a',
				800: '#060606',
				900: '#030303'
			}
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
