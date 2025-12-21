<template>
  <section id="education" class="section section-sm">
    <div class="container-narrow">
      <h2 class="section-title reveal">
        <span class="gradient-text">Education</span>
      </h2>
      
      <div class="education-card glass-strong reveal">
        <div class="education-header">
          <div class="education-icon">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
            </svg>
          </div>
          <div class="education-info">
            <h3 class="institution">{{ portfolioData.education.institution }}</h3>
            <p class="degree">{{ portfolioData.education.degree }}</p>
            <p class="department">{{ portfolioData.education.department }}</p>
          </div>
          <div class="education-period">
            <span class="period-badge">{{ portfolioData.education.period }}</span>
          </div>
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
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.education-card {
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
  border-left: 4px solid var(--color-accent-primary);
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(14, 165, 233, 0.2);
}

.education-header {
  display: flex;
  gap: var(--spacing-xl);
  align-items: flex-start;
}

.education-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-gradient);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
  color: white;
}

.education-info {
  flex: 1;
}

.institution {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
}

.degree {
  font-size: var(--font-size-base);
  color: var(--color-accent-primary);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.department {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.education-period {
  flex-shrink: 0;
}

.period-badge {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-accent-primary);
  font-size: var(--font-size-sm);
  font-weight: 600;
}

@media (max-width: 768px) {
  .education-header {
    flex-direction: column;
  }
  
  .education-period {
    align-self: flex-start;
  }
  
  .education-icon {
    width: 56px;
    height: 56px;
  }
}
</style>
