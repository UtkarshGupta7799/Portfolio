<template>
  <footer id="contact" class="contact section-grid">
    <div class="shell">
      <div class="contact-top reveal">
        <span class="section-index">08 / CONTACT</span>
        <h2>Have a hard problem?<br><em>Let's build the useful version.</em></h2>
        <a class="contact-email" :href="`mailto:${portfolioData.personal.email}`">
          {{ portfolioData.personal.email }} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="contact-grid reveal">
        <div>
          <span class="micro-label">LOCATION</span>
          <p>{{ portfolioData.personal.location }}</p>
        </div>
        <div>
          <span class="micro-label">PHONE</span>
          <a :href="`tel:${portfolioData.personal.phone}`">{{ portfolioData.personal.phone }}</a>
        </div>
        <div>
          <span class="micro-label">LINKS</span>
          <nav class="footer-links" aria-label="Social links">
            <a :href="portfolioData.personal.github" target="_blank" rel="noopener">GitHub ↗</a>
            <a :href="portfolioData.personal.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a :href="portfolioData.personal.leetcode" target="_blank" rel="noopener">LeetCode ↗</a>
          </nav>
        </div>
        <div>
          <span class="micro-label">DOCUMENT</span>
          <a :href="portfolioData.personal.resume" download>Resume PDF ↓</a>
        </div>
      </div>

      <div class="footer-base">
        <p>© {{ new Date().getFullYear() }} {{ portfolioData.personal.name }}</p>
        <p>Designed as an engineering record, built with Nuxt.</p>
        <a href="#hero">Back to top ↑</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>
