<template>
  <section id="projects" class="section section-grid">
    <div class="shell">
      <div class="section-heading split-heading reveal">
        <div>
          <span class="section-index">03 / SELECTED WORK</span>
          <h2>Proof through<br><em>working systems.</em></h2>
        </div>
        <p>Six projects across large-scale data, constrained inference, explainable AI, knowledge graphs, computer vision, and agentic execution.</p>
      </div>

      <div class="project-grid">
        <article v-for="project in portfolioData.projects" :key="project.id" class="project-record reveal">
          <header class="project-header">
            <span class="project-index">{{ project.index }}</span>
            <div class="project-links">
              <a :href="project.github" target="_blank" rel="noopener" :aria-label="`${project.title} source code`">CODE ↗</a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" :aria-label="`${project.title} live demo`">LIVE ↗</a>
            </div>
          </header>

          <div class="project-main">
            <div>
              <p class="project-subtitle">{{ project.subtitle }}</p>
              <h3>{{ project.title }}</h3>
            </div>
            <div class="project-metric">
              <strong>{{ project.metric }}</strong>
              <span>{{ project.metricLabel }}</span>
            </div>
          </div>

          <p class="project-description">{{ project.description }}</p>
          <ul class="project-highlights">
            <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
          <div class="tag-row project-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>
