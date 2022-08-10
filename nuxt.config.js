export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: 'static',
  head: {
    title: 'Test Fourtech 2022',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test Fourtech 2022' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel:"apple-touch-icon", href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	'assets/css/reset.css',
  ],
  generate: {
    dir: 'public'
  }
,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
	'@nuxt/image',
	[
		"@nuxtjs/i18n",
		{
		  lazy: true,
		  langDir: "lang/",
		  locales: [

			{
			  code: "vn",
			  name: "Vietnamese",
			  file: "vn.json"
			},
			{
				code: "en",
				name: "English",
				file: "en.json"
			  }
		  ]
		}
	  ]
  ],

  buildModules: [
    ['@nuxt/image', {
        provider: 'static',
        dir: "assets/images",
    }],
],

}
