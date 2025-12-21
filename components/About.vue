<template>
  <section id="about" class="section">
    <div class="container">
      <div class="about-content">
        <div class="about-text reveal">
          <h2 class="section-title">
            About <span class="gradient-text">Me</span>
          </h2>
          <p class="about-bio">
            {{ portfolioData.personal.bio }}
          </p>
          <div class="stats-grid">
            <div 
              v-for="(stat, index) in portfolioData.stats" 
              :key="index"
              class="stat-card glass"
            >
              <div class="stat-value gradient-text">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
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
.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.about-bio {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3xl);
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.stat-card {
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  text-align: center;
  transition: all var(--transition-base);
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.stat-value {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  font-family: var(--font-display);
  margin-bottom: var(--spacing-sm);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
}
</style>
