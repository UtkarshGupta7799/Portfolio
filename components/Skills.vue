<template>
  <section id="skills" class="section section-grid section-dark">
    <div class="shell">
      <div class="section-heading split-heading reveal">
        <div>
          <span class="section-index">04 / ENGINEERING STACK</span>
          <h2>Broad enough to own it.<br><em>Deep enough to debug it.</em></h2>
        </div>
        <p>From DNS and TLS at the edge to queues, model APIs, databases, and the product interface.</p>
      </div>

      <div class="skill-matrix">
        <article v-for="(skills, category, index) in portfolioData.skills" :key="category" class="skill-row reveal">
          <span class="skill-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ category }}</h3>
          <div class="skill-values">
            <span v-for="skill in skills" :key="skill">{{ skill }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>
