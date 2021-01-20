// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import LottieAnimation from 'lottie-vuejs' // import lottie-vuejs
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueTypedJs from 'vue-typed-js'

export default function (Vue, {


  appOptions,
  head

}) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  }, {
    rel: 'stylesheet',
    href: "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
  }, {
    rel: 'stylesheet',
    href: "https://fonts.googleapis.com/css?family=Material+Icons"
  }, )

  Vue.use(Vuetify)
  const opts = {
    icons: {
      iconfont: 'mdi',
    },
  }
  appOptions.vuetify = new Vuetify(opts);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(LottieAnimation); // add lottie-animation to your global scope
  Vue.use(VueTypedJs)
}