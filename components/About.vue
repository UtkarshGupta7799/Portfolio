<template>
  <section id="about" class="section section-grid">
    <div class="shell">
      <div class="section-heading reveal">
        <span class="section-index">01 / PROFILE</span>
        <h2>Engineering decisions,<br><em>not just demos.</em></h2>
      </div>

      <div class="about-layout">
        <p class="about-lead reveal">{{ portfolioData.personal.bio }}</p>
        <div class="capability-list">
          <article v-for="capability in portfolioData.capabilities" :key="capability.index" class="capability-row reveal">
            <span>{{ capability.index }}</span>
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>
