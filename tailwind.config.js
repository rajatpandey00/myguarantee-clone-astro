/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
	  extend: {
		colors: {
		  'teal': '#10B981',
		  'text-black': '#111827',
		  'lime-green': 'rgb(216, 244, 39)',
		  'text-gray': '#6B7280',
		  'bg-light': '#F9FAFB',
		  'bg-white': '#FFFFFF',
		},
		fontFamily: {
			'dm-sans': ['"IBM Plex Sans"', '"IBM Plex Sans Placeholder"', 'sans-serif'],
		},
		backgroundImage: {
		  'hero-gradient': 'linear-gradient(to bottom, #FFFFFF, #F0FDF4)',
		},
		borderRadius: {
		  '3xl': '1.5rem',
		},
		boxShadow: {
		  'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		},
	  },
	},
	plugins: [],
  };