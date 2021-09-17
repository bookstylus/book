export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Convite de Formatura',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'robots',
        content:
          'max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/flipbook', mode: 'client' }, '~/plugins/jsonld'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/', '~/components/utils/'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http', '@nuxtjs/robots', '@nuxtjs/sitemap'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  googleFonts: {
    families: {
      Oswald: {
        wght: ['200..700'],
      },
      Rubik: {
        wght: ['300..900'],
        ital: ['300..900'],
      },
      'Playfair+Display': {
        wght: ['400..900'],
      },
      'Amatic+SC': {
        wght: ['700'],
      },
      'Mr+De+Haviland': true,
      'Material+Icons+Round': true,
    },
    display: 'optional',
    download: true,
    useStylesheet: false,
  },
  sitemap: {
    hostname: 'https://bookstylus.com',
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://bookstylus.com/sitemap.xml',
    Host: 'https://bookstylus.com',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'ConvitesOn',
      description:
        'Seu convite tá ON📲 🎉Compartilhe sua vitória em grande estilo.',
      lang: 'pt-BR',
      theme_color: '#000',
    },
    manifest: {
      name: 'ConvitesOn',
      short_name: 'ConvitesOn',
      description:
        'Seu convite tá ON📲 🎉Compartilhe sua vitória em grande estilo.',
      lang: 'pt-BR',
      theme_color: '#000',
      background_color: '#fff',
      orientation: 'portrait',
      start_url: '/?standalone=true',
      scope: '/',
      display: 'standalone',
    },
    workbox: {
      offlineStrategy: 'cacheFirst',
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/',
          handler: 'cacheFirst',
        },
        {
          urlPattern: 'https://fonts.gstatic.com/',
          handler: 'cacheFirst',
        },
      ],
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
