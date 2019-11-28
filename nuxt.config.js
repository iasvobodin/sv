import pkg from "./package";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  serverMiddleware: [
    {
      path: "api/v1",
      handler: "~/api/data.js"
    }
  ],
  env: {
    telegrammToken: "780215419:AAEkfYCwRffGBHjaRFB_XLdHIFOkhSu9-HI"
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "red" },

  /*
   ** Global CSS
   */
  css: ["~/assets/scss/font.scss", "~/assets/scss/global.scss"],

  /*
   ** Plugins to load before mounting the App
   **/
  plugins: [
    // "~/plugins/perfect-layout.client.js",
    "~/plugins/resize.client.js",
    "~/plugins/vue-observe-visibility.client.js"

    // "~/plugins/vue-progressive-image.client.js"
    // "~/plugins/vue-observe-visibility.js"
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "https://hhcej.sse.codesandbox.io/"
  },
  /*
   ** Build configuration
   */
  build: {
    // vendor: [],
    /*
     ** You can extend webpack config here
     */
    transpile: [],
    extend(config, ctx) {}
  }
};
