<template>
  <section id="achievements" class="section">
    <div class="container-narrow">
      <h2 class="section-title reveal">
        Honors & <span class="gradient-text">Awards</span>
      </h2>
      
      <div class="achievements-grid">
        <div 
          v-for="(award, index) in portfolioData.awards" 
          :key="index"
          class="achievement-card glass reveal"
        >
          <div class="achievement-icon">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <p class="achievement-text">{{ award }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>

<style scoped>
.section-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-3xl);
  text-align: center;
}

.achievements-grid {
  display: grid;
  gap: var(--spacing-lg);
}

.achievement-card {
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
  transition: all var(--transition-base);
  border-left: 4px solid transparent;
}

.achievement-card:hover {
  border-left-color: var(--color-accent-primary);
  transform: translateX(8px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.achievement-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-gradient);
  border-radius: var(--radius-md);
  flex-shrink: 0;
  color: white;
}

.achievement-text {
  flex: 1;
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .achievement-card {
    padding: var(--spacing-lg);
  }
  
  .achievement-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
