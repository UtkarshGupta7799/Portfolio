// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'Utkarsh - ML/AI Engineer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Portfolio of Utkarsh - Machine Learning and AI Engineer specializing in deep learning, computer vision, and intelligent systems.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Utkarsh - ML/AI Engineer Portfolio' },
        { property: 'og:description', content: 'Portfolio showcasing ML/AI projects and expertise' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap' 
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'static'
  }
})
