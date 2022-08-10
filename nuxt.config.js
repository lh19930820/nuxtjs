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
	'assets/css/lang.css'
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
			  code: "en",
			  name: "English",
			  file: "en.json"
			},
			{
			  code: "vn",
			  name: "Vietnamese",
			  file: "vn.json"
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
