const staticPrefix =
  process.env.DEPLOY_ENV === 'GH_PAGES' ? '/tailwindchunks/' : '/'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
      router: {
        base: staticPrefix
      }
    }
    : {}

const buildModules = [
  // Doc: https://github.com/nuxt-community/eslint-module
  '@nuxtjs/eslint-module',
  // Doc: https://github.com/nuxt-community/stylelint-module
  '@nuxtjs/stylelint-module',
  // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
  '@nuxtjs/tailwindcss'
]

if (process.env.DEPLOY_ENV === 'GH_PAGES') {
  // include analytics
  buildModules.push([
    '@nuxtjs/google-analytics',
    {
      id: 'UA-167829608-1'
    }
  ])
}

export default {
  ...routerBase,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: `${staticPrefix}@mdi/css/materialdesignicons.min.css`
      },
      {
        rel: 'stylesheet',
        href: `${staticPrefix}highlight.js/default-style-10.0.3.min.css`
      },
      {
        rel: 'stylesheet',
        href: `${staticPrefix}github-corners.css`
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules,
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.txt$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
