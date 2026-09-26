<template>
  <section id="achievements" class="section section-grid section-tint">
    <div class="shell">
      <div class="section-heading reveal">
        <span class="section-index">06 / RECOGNITION</span>
        <h2>Measured beyond<br><em>the project list.</em></h2>
      </div>

      <div class="award-grid">
        <article v-for="(award, index) in portfolioData.awards" :key="award.label" class="award-card reveal">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ award.value }}</strong>
          <h3>{{ award.label }}</h3>
          <p>{{ award.detail }}</p>
        </article>
      </div>

      <div class="recognition-footer">
        <div class="recognition-block reveal">
          <span class="micro-label">HACKATHONS & COMMUNITIES</span>
          <div class="tag-row tag-row-large">
            <span v-for="hackathon in portfolioData.hackathons" :key="hackathon">{{ hackathon }}</span>
          </div>
        </div>
        <div class="recognition-block reveal">
          <span class="micro-label">RESEARCH</span>
          <p v-for="publication in portfolioData.publications" :key="publication">{{ publication }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>
