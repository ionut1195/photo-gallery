module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	  ],
  theme: {
    extend: {
		screens: {
		'mac': '2560px',
	},
	minHeight: {
		'20vh': '20vh',
		'30vh': '30vh',
		'50vh': '50vh',
		'40vh': '40vh',
	},
	height: {
		'40vh': '40vh',
		'30vh': '30vh',
		'50vh': '50vh',
	},
	maxWidth: {
		'mac': '1080px',
	  }},
	fontFamily: {
		drawn: ['Fredericka the Great'],
		nv: ['Open Sans'],
		nv2: ['Sora']
	},
  },
  plugins: [],
}

