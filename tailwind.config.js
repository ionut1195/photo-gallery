const { faBluetooth } = require("@fortawesome/fontawesome-free-brands")

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	  ],
  theme: {
    extend: 
	{
		colors: {
			'header-green': '#05EFC2',
			'border-dark': '#98B0A8',
			'hover-color': '#00956E',
		},
		screens: {
		'mac': '1536px',
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
			'mac': '1536px',
		},
	},
	fontFamily: {
		drawn: ['Fredericka the Great'],
		nv: ['Open Sans'],
		nv2: ['Sora'],
		roboto: ['Roboto'],
	},
  },
  plugins: [],
}

