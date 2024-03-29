module.exports = {
    content: [
      "./**/*.html",
      "./assets/**/*.js",
    ],
    theme: {
      extend: {
          colors: {
              third: '#F9A007',
              primary: '#300E6A',
              secondary: '#4A1B9D',
          },
          backgroundImage: {
            'ver-primary-transparent': 'linear-gradient(0deg, rgba(48,14,106,0.07046568627450978) 6%, rgba(48,14,106,0.34217436974789917) 26%, rgba(48,14,106,0.4206057422969187) 38%, rgba(48,14,106,0.46262254901960786) 48%, rgba(48,14,106,0.5270483193277311) 61%, rgba(48,14,106,1) 100%)',
            'ver-transparent-primary': 'linear-gradient(180deg, rgba(48,14,106,0.07046568627450978) 6%, rgba(48,14,106,0.34217436974789917) 26%, rgba(48,14,106,0.4206057422969187) 38%, rgba(48,14,106,0.46262254901960786) 48%, rgba(48,14,106,0.5270483193277311) 61%, rgba(48,14,106,1) 100%)',
          },
          fontFamily: {
              'poppins': ['Poppins', 'sans-serif'],
              'display': ['Playfair Display', 'serif'],
          },
          keyframes: {
                'key-short-long': {
                    '0%': { 
                        width: '0%'
                    },
                    '20%': { 
                        width: '10%'
                    },
                    '30%': { 
                        width: '20%'
                    },
                    '40%': { 
                        width: '25%'
                    },
                    '50%': { 
                        width: '30%'
                    },
                    '60%': { 
                        width: '25%'
                    },
                    '70%': { 
                        width: '20%'
                    },
                    '80%': { 
                        width: '10%'
                    },
                    '90%': { 
                        width: '5%'
                    },
                    '100%': { 
                        width: '0%'
                    },
                }
          },
          animation: {
              'short-long': 'key-short-long linear 2s infinite'
          }
      },
    },
    plugins: [],
}