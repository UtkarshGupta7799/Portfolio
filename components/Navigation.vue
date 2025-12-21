<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <!-- Logo -->
        <a href="#hero" class="logo" @click.prevent="scrollToSection('hero')">
          <span class="gradient-text">{{ portfolioData.personal.name }}</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="nav-links desktop-nav">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="`#${link.id}`"
            :class="{ 'active': activeSection === link.id }"
            @click.prevent="scrollToSection(link.id)"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ 'open': isMobileMenuOpen }">
      <a 
        v-for="link in navLinks" 
        :key="link.id"
        :href="`#${link.id}`"
        :class="{ 'active': activeSection === link.id }"
        @click="handleMobileNavClick(link.id)"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import portfolioData from '~/data/portfolio.json'

const isScrolled = ref(false)
const activeSection = ref('hero')
const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'leetcode', label: 'LeetCode' },
  { id: 'achievements', label: 'Awards' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMobileNavClick = (sectionId: string) => {
  scrollToSection(sectionId)
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section based on scroll position
  const sections = navLinks.map(link => link.id)
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  padding: var(--spacing-lg) 0;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-md) 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: 700;
  text-decoration: none;
  transition: transform var(--transition-base);
}

.logo:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.nav-links a {
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent-gradient);
  transition: width var(--transition-base);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--color-text-primary);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--spacing-sm);
  cursor: pointer;
  background: transparent;
  border: none;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-base);
}

.mobile-nav {
  display: none;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border);
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
  }

  .mobile-nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .mobile-nav a {
    color: var(--color-text-secondary);
    font-weight: 500;
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--color-border);
    transition: color var(--transition-fast);
  }

  .mobile-nav a:last-child {
    border-bottom: none;
  }

  .mobile-nav a:hover,
  .mobile-nav a.active {
    color: var(--color-accent-primary);
  }
}
</style>
