/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				exo: ["'Exo 2'"],
				lato: ["Lato"],
				title: ["Oswald"],
				montserrat: ["Montserrat"],
				merriweather: ["'Merriweather Sans'"],
				sans: ["Raleway", "sans"], //Raleway fuente por defecto
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#041c32",
					"secondary": "#064663",
					"accent": "#b2ab8c",
					"neutral": "#44403c",
					"base-100": "#1c1917",
					"info": "#ecb365",
					"success": "#0f766e",
					"warning": "#6b21a8",
					"error": "#9d174d",
				},
			},
		],
	},
};
