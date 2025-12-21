<template>
  <div id="app">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Add scroll reveal functionality
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, observerOptions)

  // Observe all elements with .reveal class
  const revealElements = document.querySelectorAll('.reveal')
  revealElements.forEach(el => observer.observe(el))
})
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
