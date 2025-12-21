<template>
  <section id="projects" class="section">
    <div class="container-wide">
      <h2 class="section-title reveal">
        Featured <span class="gradient-text">Projects</span>
      </h2>
      
      <div class="projects-grid">
        <div 
          v-for="project in portfolioData.projects" 
          :key="project.id"
          class="project-card glass-strong reveal"
        >
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-subtitle">{{ project.subtitle }}</p>
          </div>
          
          <p class="project-description">{{ project.description }}</p>
          
          <div class="project-highlights">
            <ul>
              <li v-for="(highlight, index) in project.highlights" :key="index">
                {{ highlight }}
              </li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span 
              v-for="(tag, index) in project.tags" 
              :key="index"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
          
          <div class="project-links">
            <a :href="project.github" target="_blank" rel="noopener" class="btn btn-ghost">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="btn btn-primary">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-2xl);
}

.project-card {
  padding: var(--spacing-2xl);
  border-radius: var(--radius-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-accent-gradient);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.project-header {
  margin-bottom: var(--spacing-sm);
}

.project-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-xs);
  background: var(--color-accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.project-highlights {
  flex: 1;
}

.project-highlights ul {
  list-style: none;
  padding: 0;
}

.project-highlights li {
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-sm);
  position: relative;
}

.project-highlights li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--color-accent-primary);
  font-size: var(--font-size-lg);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  color: var(--color-accent-primary);
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

.project-links .btn {
  flex: 1;
  font-size: var(--font-size-sm);
  padding: var(--spacing-sm) var(--spacing-md);
}

.project-links svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    padding: var(--spacing-lg);
  }
}
</style>
