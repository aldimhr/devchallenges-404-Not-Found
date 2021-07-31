module.exports = {
   mode: 'jit',
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            spaceMono: "'Space Mono', monospace",
            inconsolata: "'Inconsolata', monospace",
            montserrat: "'Montserrat', sans-serif",
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
