/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme  : {
	extend: {
	  colors       : {
		primary: "hsl(25, 97%, 53%)",
		natural: {
		  white     : "hsl(0, 0%, 100%)",
		  ltGray    : "hsl(217, 12%, 63%)",
		  mdGray    : "hsl(216, 12%, 54%)",
		  dkBlue    : "hsl(213, 19%, 18%)",
		  deepDKBlue: "hsl(216, 12%, 8%)",
		},
	  },
	  fontFamily   : {
		overpass: ["Overpass", "sans-serif"],
	  },
	  spacing      : {
		"85" : "85%",
		nHalf: "-50%",
		half : "50%",
	  },
	  letterSpacing: {
		ideal: "2px",
	  },
	  maxWidth     : {
		ideal : "450px",
		"85" : "85%",
	  },
	  screens : {
		ideal : "500px",
	  }
	  
	},
  },
  plugins: [],
};

