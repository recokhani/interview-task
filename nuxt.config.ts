
export default defineNuxtConfig({

  // ***************************************************************ssg config
  ssr: true, // Disable server-side rendering for static site generation
  target: 'server', // Enable static target for generating static files
  css: [
    '@/assets/css/tailwind.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  generate: {

  },

  // **************************************************************** ssr config
  devServer: {
    host: '0.0.0.0', // Allows access from outside localhost
    port: 3011, // You can change the port if necessary
  },


  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'vuetify-nuxt-module',
    '@vee-validate/nuxt',
    'vue3-carousel-nuxt',
    '@vite-pwa/nuxt'
  ],

  pwa:{
    manifest: {
      name: "Pouya-salamat",
      short_name: "Pouya-salamat-employee",
      theme_color:'#386BEB',
      background_color:'#386BEB',
      description: "employee task ",
      start_url:"/create",
      icons: [
        {
          src: 'img/logo.svg',
          sizes: "150x150",
          type: "image/png"
        },
      ]
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module"
    }
  },
  build: {
    transpile: ['vue-sonner'],
  },
  vuetify: {
    rtl:true,
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        // Configure your theme options here
        themes: {
        },
        defaults: {
          global: {
            style: {
              fontFamily: 'IRANSans'
            }
          }
        },
        options: { customProperties: true } // enable CSS variables
      },
      rtl: true, // Enable RTL support
    }
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      BASE_URL_SERVER: process.env.BASE_URL_SERVER,
    }
  },

  router: {
    base: process.env.BASE_URL_SERVER
  },

  tailwindcss: {
  },

  app: {
    head: {
      title: 'Pouya-salamat',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Your site description here' },

      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: `${process.env.BASE_URL_SERVER+'favicon.ico'}` },
      ],

    },
    baseURL: process.env.BASE_URL_SERVER // Set baseURL to match the subdirectory
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})