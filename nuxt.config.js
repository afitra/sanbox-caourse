 
export default {
  
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,
  mode: 'spa',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Toko-Midtrans',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  
    // {rel:'stylesheet', href:'/assets/fonts/flaticon/flaticon.css', lang:'css'},
    // {rel:'stylesheet', href:'/assets/fonts/icofont/icofont.min.css', lang:'css'},
    // {rel:'stylesheet', href:'/assets/fonts/fontawesome/fontawesome.min.css', lang:'css'},
  
    // <!-- VENDOR -->
    // {rel:'stylesheet', href:'/assets/vendor/venobox/venobox.min.css', lang:'css'},
    // {rel:'stylesheet', href:'/assets/vendor/slickslider/slick.min.css', lang:'css'},
    // {rel:'stylesheet', href:'/assets/vendor/niceselect/nice-select.min.css', lang:'css'},
    // {rel:'stylesheet', href:'/assets/vendor/bootstrap/bootstrap.min.css', lang:'css'},
  
    // <!-- CUSTOM -->
    // {rel:'stylesheet', href:'/assets/css/main.css', lang:'css'},
    // {rel:'stylesheet', href:'/assets/css/index.css', lang:'css'}
  
  ],
    // <!-- FONTS -->
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
        '@/assets/fonts/flaticon/flaticon.css',
        '@/assets/fonts/icofont/icofont.min.css',
        '@/assets/fonts/fontawesome/fontawesome.min.css',

  
        '@/assets/vendor/venobox/venobox.min.css',
        '@/assets/vendor/slickslider/slick.min.css',
        '@/assets/vendor/niceselect/nice-select.min.css',
        '@/assets/vendor/bootstrap/bootstrap.min.css',

 
        '@/assets/css/main.css',
      
  ],
  script:[
        '@/vendor/bootstrap/jquery-1.12.4.min.js',
        '@/vendor/bootstrap/popper.min.js',
        '@/vendor/bootstrap/bootstrap.min.js',
        '@/vendor/countdown/countdown.min.js',
        '@/vendor/niceselect/nice-select.min.js',
        '@/vendor/slickslider/slick.min.js',
        '@/vendor/venobox/venobox.min.js',

        // <!-- CUSTOM -->
        '@/js/nice-select.js',
        '@/js/countdown.js',
        '@/js/accordion.js',
        '@/js/venobox.js',
        '@/js/slick.js',
        '@/js/main.js'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],
  styleResources: {
    css: '@/assets/css/*.scss'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://serverbeli.apitoong.com/api/v1',
    
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/user/login', method: 'post' ,propertyName:'token'},
          logout: false,
          user: { url: '/user/data', method: 'get',propertyName: 'user' }
         
        },
      },
    },
  },
  router: {
    middleware: ['customAuth']
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
