<template>
  <section id="hero" class="hero section-grid">
    <div class="shell hero-shell">
      <div class="hero-kicker reveal">
        <span class="status-light"></span>
        {{ portfolioData.personal.availability }}
      </div>

      <div class="hero-layout">
        <div class="hero-copy reveal">
          <p class="eyebrow">FULL-STACK ENGINEER / AI PRODUCTS</p>
          <h1>
            I build systems that move from
            <span>insight to action.</span>
          </h1>
          <p class="hero-intro">{{ portfolioData.personal.tagline }}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">Explore selected work <span aria-hidden="true">↘</span></a>
            <a class="button button-secondary" :href="portfolioData.personal.resume" download>Download resume <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <aside class="hero-console reveal" aria-label="Engineering profile summary">
          <div class="console-header">
            <span>ENGINEER_PROFILE.JSON</span>
            <span class="console-live">LIVE</span>
          </div>
          <div class="console-mark" aria-hidden="true">
            <div class="pixel-letter">
              <i v-for="(cell, index) in pixelMap" :key="index" :class="{ on: cell === '1' }"></i>
            </div>
          </div>
          <dl class="console-data">
            <div><dt>name</dt><dd>"{{ portfolioData.personal.name }}"</dd></div>
            <div><dt>focus</dt><dd>["agents", "systems", "products"]</dd></div>
            <div><dt>current</dt><dd>"CausalFunnel"</dd></div>
            <div><dt>location</dt><dd>"{{ portfolioData.personal.location }}"</dd></div>
          </dl>
        </aside>
      </div>

      <div class="hero-stats reveal">
        <div v-for="stat in portfolioData.stats" :key="stat.label" class="hero-stat">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolioData from '~/data/portfolio.json'

const pixelMap = '111011101000101010001010101110101010101010101110111'.split('')
</script>
