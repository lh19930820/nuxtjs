export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-fourtech1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	'assets/css/reset.css'
  ],
  generate: {
    dir: 'public'
  }
,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
	'@nuxt/image',
	'@nuxtjs/i18n'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildModules: [
    // Next Image module https://image.nuxtjs.org/components/nuxt-img
    ['@nuxt/image', {
        provider: 'static',
        dir: "assets/images",
    }],
],
  i18n: {
	locales: [
	  {
		code: 'en',
		file: 'en.js'
	  },
	  {
		code: 'vn',
		file: 'vn.js'
	  }
	]

  }
}
