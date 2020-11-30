const URL = 'http://localhost:3334/'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'petbox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css'},
      { rel: 'stylesheet', href: '/css/all.css'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // '@nuxtjs/fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth'
  ],
  router: {
    // middleware: ['auth']
  },
  
  auth: {
    // plugins: [ { src: '~/plugins/axios', ssr: true }, '~/plugins/auth.js' ],
    strategies:{ local: 
      {
        endpoints: {
            login: {
                url: 'login',
                method: 'post',
                propertyName: 'token'
            },
            user: {
                url: 'account/me',
                method: 'get',
                propertyName: 'user'
            },
            logout: false
        },
        tokenType: '',
        // tokenRequired: true,
    }
  },

},

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: URL
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
