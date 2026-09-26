<template>
  <section id="problem-solving" class="section section-grid">
    <div class="shell">
      <div class="problem-panel reveal">
        <div class="problem-copy">
          <span class="section-index">05 / PROBLEM SOLVING</span>
          <h2>Practice that compounds.</h2>
          <p>Algorithms sharpen implementation. Systems thinking makes the implementation useful in production.</p>
          <div class="problem-links">
            <a :href="portfolioData.personal.leetcode" target="_blank" rel="noopener" class="button button-primary">LeetCode profile ↗</a>
            <a href="https://codeforces.com/" target="_blank" rel="noopener" class="button button-secondary">Codeforces Expert</a>
          </div>
        </div>

        <div class="score-board" aria-label="Competitive programming summary">
          <div class="score-primary">
            <strong>750+</strong>
            <span>problems solved</span>
          </div>
          <div class="score-secondary">
            <div><strong>1669</strong><span>Codeforces peak</span></div>
            <div><strong>Expert</strong><span>competitive rank</span></div>
          </div>
          <div class="score-strip" aria-hidden="true">
            <i v-for="index in 24" :key="index" :class="{ active: index < 19, hot: index > 15 && index < 20 }"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'
</script>
