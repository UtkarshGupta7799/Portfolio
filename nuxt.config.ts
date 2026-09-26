export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Utkarsh Gupta | Full-Stack Developer & AI Product Engineer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Utkarsh Gupta builds production AI agents, distributed backends, and full-stack products across advertising, SEO, conversion optimization, and large-scale data systems.'
        },
        { name: 'theme-color', content: '#f7f7f2' },
        { property: 'og:title', content: 'Utkarsh Gupta | Full-Stack Developer & AI Product Engineer' },
        { property: 'og:description', content: 'Production AI systems, full-stack products, and engineering under real constraints.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'static'
  }
})
