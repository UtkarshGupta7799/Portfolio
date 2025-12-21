<template>
  <div class="portfolio">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Utkarsh - ML/AI Engineer Portfolio',
  meta: [
    { 
      name: 'description', 
      content: 'Portfolio of Utkarsh - Machine Learning and AI Engineer specializing in deep learning, computer vision, and intelligent systems.' 
    }
  ]
})
</script>

<style scoped>
.portfolio {
  width: 100%;
}
</style>
