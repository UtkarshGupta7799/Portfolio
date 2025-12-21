<template>
  <div class="portfolio">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <LeetCodeStats />
    <Achievements />
    <Contact />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Utkarsh Gupta - ML/AI Engineer Portfolio',
  meta: [
    { 
      name: 'description', 
      content: 'Portfolio of Utkarsh Gupta - Machine Learning and AI Engineer specializing in deep learning, computer vision, and intelligent systems. Top 0.1% Kaggle competitor with 750+ LeetCode problems solved.' 
    }
  ]
})
</script>

<style scoped>
.portfolio {
  width: 100%;
}
</style>
