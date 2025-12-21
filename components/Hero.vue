<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text reveal">
          <h1 class="hero-title">
            Hi, I'm <span class="gradient-text">{{ portfolioData.personal.name }}</span>
          </h1>
          <h2 class="hero-subtitle">
            <span class="typing-text">{{ currentText }}</span>
            <span class="cursor">|</span>
          </h2>
          <p class="hero-description">
            {{ portfolioData.personal.tagline }}
          </p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary" @click.prevent="scrollToSection('projects')">
              View My Work
            </a>
            <a href="#contact" class="btn btn-secondary" @click.prevent="scrollToSection('contact')">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div class="hero-visual reveal">
          <div class="floating-card glass-strong">
            <div class="code-snippet">
              <div class="code-line">
                <span class="code-keyword">const</span> 
                <span class="code-variable"> developer</span> 
                <span class="code-operator"> = </span>
                <span class="code-bracket">{</span>
              </div>
              <div class="code-line code-indent">
                <span class="code-property">name:</span> 
                <span class="code-string">'{{ portfolioData.personal.name }}'</span>,
              </div>
              <div class="code-line code-indent">
                <span class="code-property">skills:</span> 
                <span class="code-bracket">[</span>
                <span class="code-string">'ML'</span>, 
                <span class="code-string">'AI'</span>, 
                <span class="code-string">'DL'</span>
                <span class="code-bracket">]</span>,
              </div>
              <div class="code-line code-indent">
                <span class="code-property">passion:</span> 
                <span class="code-string">'Building the Future'</span>
              </div>
              <div class="code-line">
                <span class="code-bracket">}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Animated Background Elements -->
    <div class="bg-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import portfolioData from '~/data/portfolio.json'

const roles = [
  'Machine Learning Engineer',
  'AI Developer',
  'Deep Learning Specialist',
  'Computer Vision Expert'
]

const currentText = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingInterval: NodeJS.Timeout

const typeText = () => {
  const currentRole = roles[roleIndex]
  
  if (isDeleting) {
    currentText.value = currentRole.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentText.value = currentRole.substring(0, charIndex + 1)
    charIndex++
  }
  
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => { isDeleting = true }, 2000)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

onMounted(() => {
  typingInterval = setInterval(typeText, isDeleting ? 50 : 100)
})

onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval)
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-4xl) 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: var(--font-size-6xl);
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: var(--font-size-3xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  min-height: 60px;
  font-weight: 600;
}

.typing-text {
  color: var(--color-accent-primary);
}

.cursor {
  animation: pulse 1s infinite;
  color: var(--color-accent-primary);
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-2xl);
  line-height: 1.8;
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1.5s ease-out;
}

.floating-card {
  padding: var(--spacing-2xl);
  border-radius: var(--radius-2xl);
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
}

.code-snippet {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: var(--font-size-sm);
  line-height: 1.8;
}

.code-line {
  margin: var(--spacing-xs) 0;
}

.code-indent {
  padding-left: var(--spacing-xl);
}

.code-keyword {
  color: #c678dd;
}

.code-variable {
  color: #e06c75;
}

.code-operator {
  color: #56b6c2;
}

.code-property {
  color: #61afef;
}

.code-string {
  color: #98c379;
}

.code-bracket {
  color: #abb2bf;
}

.bg-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: var(--color-accent-primary);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: var(--color-accent-secondary);
  bottom: 20%;
  right: 15%;
  animation-delay: 5s;
}

.shape-3 {
  width: 350px;
  height: 350px;
  background: var(--color-accent-tertiary);
  top: 50%;
  right: 30%;
  animation-delay: 10s;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .hero-title {
    font-size: var(--font-size-5xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: var(--spacing-3xl) 0;
  }
  
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-xl);
    min-height: 40px;
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .hero-cta .btn {
    width: 100%;
    justify-content: center;
  }
  
  .floating-card {
    padding: var(--spacing-lg);
  }
  
  .code-snippet {
    font-size: var(--font-size-xs);
  }
}
</style>
