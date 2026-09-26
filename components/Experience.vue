<template>
  <section id="experience" class="section section-grid section-tint">
    <div class="shell">
      <div class="section-heading split-heading reveal">
        <div>
          <span class="section-index">02 / EXPERIENCE</span>
          <h2>Built, shipped,<br><em>kept running.</em></h2>
        </div>
        <p>Four roles spanning production AI products, applied machine learning, infrastructure, and measurable customer outcomes.</p>
      </div>

      <div class="experience-list">
        <article v-for="(experience, index) in portfolioData.experience" :key="experience.id" class="experience-record reveal">
          <div class="record-rail">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <i></i>
          </div>
          <div class="record-meta">
            <p>{{ experience.period }}</p>
            <p>{{ experience.location }}</p>
          </div>
          <div class="record-body">
            <div class="record-title">
              <h3>{{ experience.role }}</h3>
              <a v-if="experience.id === 'causalfunnel'" href="https://causalfunnel.com" target="_blank" rel="noopener">{{ experience.company }} ↗</a>
              <p v-else>{{ experience.company }}</p>
            </div>
            <p class="record-summary">{{ experience.description }}</p>
            <ul class="record-points">
              <li v-for="achievement in experience.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
            <div class="tag-row">
              <span v-for="technology in experience.technologies" :key="technology">{{ technology }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>
