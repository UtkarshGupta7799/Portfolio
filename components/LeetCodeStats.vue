<template>
  <section id="leetcode" class="section section-sm">
    <div class="container-narrow">
      <h2 class="section-title reveal">
        LeetCode <span class="gradient-text">Stats</span>
      </h2>
      
      <div class="leetcode-container reveal">
        <div class="leetcode-header glass-strong">
          <div class="profile-info">
            <div class="profile-icon">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </div>
            <div>
              <h3 class="username">UtkarshGupta01</h3>
              <p class="rank">Rank #60931</p>
            </div>
          </div>
          <div class="total-solved">
            <div class="solved-number gradient-text">763</div>
            <div class="solved-label">Problems Solved</div>
          </div>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card glass">
            <div class="stat-header">
              <span class="difficulty-badge easy">Easy</span>
              <span class="stat-count">162 / 918</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill easy-fill" :style="{ width: '17.6%' }"></div>
            </div>
          </div>
          
          <div class="stat-card glass">
            <div class="stat-header">
              <span class="difficulty-badge medium">Medium</span>
              <span class="stat-count">432 / 1973</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill medium-fill" :style="{ width: '21.9%' }"></div>
            </div>
          </div>
          
          <div class="stat-card glass">
            <div class="stat-header">
              <span class="difficulty-badge hard">Hard</span>
              <span class="stat-count">169 / 895</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill hard-fill" :style="{ width: '18.9%' }"></div>
            </div>
          </div>
        </div>
        
        <div class="leetcode-link">
          <a :href="portfolioData.personal.leetcode" target="_blank" rel="noopener" class="btn btn-secondary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
            View Full Profile
          </a>
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
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.leetcode-container {
  max-width: 700px;
  margin: 0 auto;
}

.leetcode-header {
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  gap: var(--spacing-lg);
}

.profile-info {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

.profile-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-gradient);
  border-radius: var(--radius-md);
  color: white;
}

.username {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
}

.rank {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

.total-solved {
  text-align: center;
}

.solved-number {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  font-family: var(--font-display);
  line-height: 1;
}

.solved-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: var(--spacing-xs);
}

.stats-grid {
  display: grid;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.stat-card {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.difficulty-badge {
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.difficulty-badge.easy {
  background: rgba(0, 184, 148, 0.1);
  color: #00b894;
}

.difficulty-badge.medium {
  background: rgba(253, 203, 110, 0.1);
  color: #fdcb6e;
}

.difficulty-badge.hard {
  background: rgba(255, 118, 117, 0.1);
  color: #ff7675;
}

.stat-count {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 1s ease-out;
}

.easy-fill {
  background: linear-gradient(90deg, #00b894, #00cec9);
}

.medium-fill {
  background: linear-gradient(90deg, #fdcb6e, #ffeaa7);
}

.hard-fill {
  background: linear-gradient(90deg, #ff7675, #fd79a8);
}

.leetcode-link {
  text-align: center;
}

.leetcode-link .btn {
  display: inline-flex;
  gap: var(--spacing-sm);
}

@media (max-width: 768px) {
  .leetcode-header {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-info {
    flex-direction: column;
  }
  
  .solved-number {
    font-size: var(--font-size-3xl);
  }
}
</style>
