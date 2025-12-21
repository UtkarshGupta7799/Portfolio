<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title reveal">
        Skills & <span class="gradient-text">Technologies</span>
      </h2>
      
      <div class="skills-container">
        <div 
          v-for="(skills, category) in portfolioData.skills" 
          :key="category"
          class="skill-category reveal"
        >
          <h3 class="category-title">{{ category }}</h3>
          <div class="skills-grid">
            <div 
              v-for="(skill, index) in skills" 
              :key="index"
              class="skill-tag glass"
            >
              {{ skill }}
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
.section-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-3xl);
  text-align: center;
}

.skills-container {
  display: grid;
  gap: var(--spacing-3xl);
}

.skill-category {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.skill-category:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.category-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-xl);
  color: var(--color-accent-primary);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.skill-tag {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: all var(--transition-base);
  cursor: default;
}

.skill-tag:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--color-accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

@media (max-width: 768px) {
  .skill-category {
    padding: var(--spacing-lg);
  }
  
  .category-title {
    font-size: var(--font-size-xl);
  }
}
</style>
