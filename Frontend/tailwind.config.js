/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				100: "28rem",
			},
			width: {
				90: "22rem",
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};