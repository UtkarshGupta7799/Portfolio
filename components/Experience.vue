<template>
  <section id="experience" class="section">
    <div class="container-narrow">
      <h2 class="section-title reveal">
        Work <span class="gradient-text">Experience</span>
      </h2>
      
      <div class="timeline">
        <div 
          v-for="(exp, index) in portfolioData.experience" 
          :key="exp.id"
          class="timeline-item reveal"
        >
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
            <div v-if="index < portfolioData.experience.length - 1" class="timeline-line"></div>
          </div>
          
          <div class="experience-card glass-strong">
            <div class="experience-header">
              <div>
                <h3 class="experience-role">{{ exp.role }}</h3>
                <p class="experience-company">{{ exp.company }}</p>
              </div>
              <span class="experience-period">{{ exp.period }}</span>
            </div>
            
            <p class="experience-description">{{ exp.description }}</p>
            
            <div class="experience-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li v-for="(achievement, idx) in exp.achievements" :key="idx">
                  {{ achievement }}
                </li>
              </ul>
            </div>
            
            <div class="experience-tech">
              <span 
                v-for="(tech, idx) in exp.technologies" 
                :key="idx"
                class="tech-badge"
              >
                {{ tech }}
              </span>
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

.timeline {
  position: relative;
}

.timeline-item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent-gradient);
  box-shadow: 0 0 0 4px var(--color-bg-primary), 0 0 0 8px rgba(99, 102, 241, 0.2);
  z-index: 1;
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, var(--color-accent-primary), transparent);
  margin-top: var(--spacing-sm);
}

.experience-card {
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.experience-card:hover {
  transform: translateX(8px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-md);
}

.experience-role {
  font-size: var(--font-size-xl);
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-xs);
}

.experience-company {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  font-weight: 600;
}

.experience-period {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  background: rgba(99, 102, 241, 0.1);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.experience-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.experience-achievements h4 {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-md);
}

.experience-achievements ul {
  list-style: none;
  padding: 0;
  margin-bottom: var(--spacing-lg);
}

.experience-achievements li {
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-secondary);
  position: relative;
}

.experience-achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent-primary);
  font-weight: bold;
}

.experience-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
}

.tech-badge {
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  color: var(--color-accent-secondary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 30px 1fr;
    gap: var(--spacing-md);
  }
  
  .experience-card {
    padding: var(--spacing-lg);
  }
  
  .experience-header {
    flex-direction: column;
  }
  
  .experience-period {
    align-self: flex-start;
  }
}
</style>
