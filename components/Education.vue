<template>
  <section id="education" class="section section-grid">
    <div class="shell">
      <div class="education-panel reveal">
        <div>
          <span class="section-index">07 / EDUCATION</span>
          <h2>{{ portfolioData.education.institution }}</h2>
          <p>{{ portfolioData.education.degree }} in {{ portfolioData.education.department }}</p>
        </div>
        <dl>
          <div><dt>Period</dt><dd>{{ portfolioData.education.period }}</dd></div>
          <div><dt>CGPA</dt><dd>{{ portfolioData.education.cgpa }}</dd></div>
          <div><dt>Status</dt><dd>{{ portfolioData.education.status }}</dd></div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>
