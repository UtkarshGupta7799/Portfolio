<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="shell nav-shell">
      <a class="wordmark" href="#hero" aria-label="Utkarsh Gupta, home" @click="closeMenu">
        <span class="wordmark-pixels" aria-hidden="true">
          <i v-for="pixel in 9" :key="pixel"></i>
        </span>
        <span>UTKARSH / GUPTA</span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a v-for="link in navLinks" :key="link.id" :href="`#${link.id}`">
          {{ link.label }}
        </a>
      </nav>

      <div class="nav-actions">
        <button class="theme-toggle" type="button" :aria-label="themeLabel" @click="toggleTheme">
          <span>{{ isDark ? 'LIGHT' : 'DARK' }}</span>
          <span class="theme-dot" aria-hidden="true"></span>
        </button>
        <button class="menu-toggle" type="button" :aria-expanded="isMenuOpen" aria-label="Toggle navigation" @click="isMenuOpen = !isMenuOpen">
          <span></span><span></span>
        </button>
      </div>
    </div>

    <nav class="mobile-nav" :class="{ 'is-open': isMenuOpen }" aria-label="Mobile navigation">
      <a v-for="link in navLinks" :key="link.id" :href="`#${link.id}`" @click="closeMenu">
        <span>{{ link.index }}</span>{{ link.label }}
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isDark = ref(false)

const navLinks = [
  { id: 'about', label: 'Profile', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'projects', label: 'Projects', index: '03' },
  { id: 'skills', label: 'Stack', index: '04' },
  { id: 'contact', label: 'Contact', index: '05' }
]

const themeLabel = computed(() => `Switch to ${isDark.value ? 'light' : 'dark'} theme`)

const syncScroll = () => {
  isScrolled.value = window.scrollY > 24
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const applyTheme = () => {
  document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

onMounted(() => {
  const savedTheme = localStorage.getItem('portfolio-theme')
  isDark.value = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme()
  syncScroll()
  window.addEventListener('scroll', syncScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', syncScroll))
</script>
