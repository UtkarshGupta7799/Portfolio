<template>
  <section id="contact" class="section">
    <div class="container-narrow">
      <h2 class="section-title reveal">
        Get In <span class="gradient-text">Touch</span>
      </h2>
      
      <p class="contact-intro reveal">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
      </p>
      
      <div class="contact-content">
        <div class="contact-info reveal">
          <div class="info-card glass">
            <div class="info-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h3>Email</h3>
              <a :href="`mailto:${portfolioData.personal.email}`">{{ portfolioData.personal.email }}</a>
            </div>
          </div>
          
          <div class="info-card glass">
            <div class="info-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <h3>Location</h3>
              <p>{{ portfolioData.personal.location }}</p>
            </div>
          </div>
          
          <div class="social-links">
            <a :href="portfolioData.personal.github" target="_blank" rel="noopener" class="social-link glass" title="GitHub">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a :href="portfolioData.personal.linkedin" target="_blank" rel="noopener" class="social-link glass" title="LinkedIn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a :href="portfolioData.personal.twitter" target="_blank" rel="noopener" class="social-link glass" title="Twitter">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <form class="contact-form glass-strong reveal" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              placeholder="Your name"
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              placeholder="your.email@example.com"
            >
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="formData.subject" 
              required 
              placeholder="What's this about?"
            >
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              required 
              rows="5"
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary submit-btn">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} {{ portfolioData.personal.name }}. Built with Nuxt.js</p>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import portfolioData from '~/data/portfolio.json'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // You can integrate with services like Formspree, EmailJS, or your own backend
  alert('Form submission functionality can be integrated with services like Formspree or EmailJS. For now, this is a demo.')
  console.log('Form data:', formData.value)
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.section-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.contact-intro {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-4xl);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.info-card {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
  transition: all var(--transition-base);
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
}

.info-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-gradient);
  border-radius: var(--radius-md);
  flex-shrink: 0;
  color: white;
}

.info-card h3 {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-xs);
}

.info-card a,
.info-card p {
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
  word-break: break-word;
}

.info-card a:hover {
  color: var(--color-accent-primary);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--color-accent-gradient);
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.contact-form {
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-family: inherit;
  font-size: var(--font-size-base);
  transition: all var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent-primary);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  margin-top: var(--spacing-md);
}

.footer {
  padding: var(--spacing-2xl) 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-text-tertiary);
  font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .contact-form {
    padding: var(--spacing-lg);
  }
}
</style>
