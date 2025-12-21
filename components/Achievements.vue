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
      
      <h3 class="subsection-title reveal">Hackathons & Competitions</h3>
      <div class="hackathons-grid">
        <div 
          v-for="(hackathon, index) in portfolioData.hackathons" 
          :key="index"
          class="hackathon-badge glass reveal"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <span>{{ hackathon }}</span>
        </div>
      </div>
      
      <h3 class="subsection-title reveal">Publications</h3>
      <div class="publications-grid">
        <div 
          v-for="(publication, index) in portfolioData.publications" 
          :key="index"
          class="publication-card glass reveal"
        >
          <div class="publication-icon">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <p class="publication-text">{{ publication }}</p>
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

.subsection-title {
  font-size: var(--font-size-2xl);
  margin-top: var(--spacing-4xl);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  color: var(--color-text-secondary);
}

.achievements-grid {
  display: grid;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
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
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.2);
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

.hackathons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.hackathon-badge {
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
  border: 1px solid var(--color-border);
}

.hackathon-badge:hover {
  border-color: var(--color-accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.15);
}

.hackathon-badge svg {
  color: var(--color-accent-primary);
  flex-shrink: 0;
}

.publications-grid {
  display: grid;
  gap: var(--spacing-lg);
}

.publication-card {
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
  transition: all var(--transition-base);
  border-left: 4px solid var(--color-accent-secondary);
}

.publication-card:hover {
  transform: translateX(8px);
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.2);
}

.publication-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
  border-radius: var(--radius-md);
  flex-shrink: 0;
  color: white;
}

.publication-text {
  flex: 1;
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  font-style: italic;
}

@media (max-width: 768px) {
  .achievement-card,
  .publication-card {
    padding: var(--spacing-lg);
  }
  
  .achievement-icon,
  .publication-icon {
    width: 40px;
    height: 40px;
  }
  
  .hackathons-grid {
    grid-template-columns: 1fr;
  }
}
</style>
