
export default defineNuxtConfig({
  pages: true,
  css: [ '~/style/main.css' ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
