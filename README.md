# 🚀 Portfolio Website

A modern, visually stunning portfolio website built with Nuxt.js, showcasing ML/AI expertise, projects, and professional experience with smooth animations and premium design aesthetics.

## ✨ Features

- **Premium Dark Theme** with glassmorphism effects and vibrant gradients
- **Smooth Animations** and micro-interactions throughout
- **Fully Responsive** design for all devices
- **SEO Optimized** with proper meta tags
- **Type-safe** with TypeScript support
- **Static Site Generation** for optimal performance
- **Easy Content Management** via JSON data file

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **Language**: TypeScript
- **Styling**: Vanilla CSS with custom design system
- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Deployment**: Vercel (recommended) or Render

## 📁 Project Structure

```
Portfolio/
├── assets/
│   └── css/
│       └── main.css          # Design system & global styles
├── components/
│   ├── Navigation.vue        # Sticky navigation with smooth scroll
│   ├── Hero.vue             # Landing section with typing animation
│   ├── About.vue            # About section with stats
│   ├── Skills.vue           # Categorized skills showcase
│   ├── Projects.vue         # Project cards with details
│   ├── Experience.vue       # Timeline of work experience
│   └── Contact.vue          # Contact form and social links
├── data/
│   └── portfolio.json       # All content data (EDIT THIS!)
├── pages/
│   └── index.vue            # Main page
├── public/                  # Static assets
├── app.vue                  # Root component
├── nuxt.config.ts          # Nuxt configuration
├── package.json            # Dependencies
├── vercel.json             # Vercel deployment config
└── render.yaml             # Render deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run generate
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Customizing Content

### Update Portfolio Data

Edit `data/portfolio.json` to customize all content:

- **Personal Information**: Name, title, bio, contact details
- **Stats**: Project count, experience, technologies
- **Skills**: Categorized technical skills
- **Projects**: Project details, descriptions, links
- **Experience**: Work history and achievements

### Update Styling

Edit `assets/css/main.css` to customize:

- Color palette (CSS custom properties in `:root`)
- Typography
- Spacing and sizing
- Animations

### Add Images

Place images in the `public/` directory and reference them in `portfolio.json`:

```json
"image": "/projects/your-project.jpg"
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect Nuxt.js and deploy

   Or use CLI:
   ```bash
   vercel
   ```

3. **Configuration**: The `vercel.json` file is already configured for static site generation.

### Deploy to Render

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to [render.com](https://render.com)
   - Create a new Static Site
   - Connect your GitHub repository
   - Render will use the `render.yaml` configuration automatically

3. **Manual Configuration** (if needed):
   - Build Command: `npm install && npm run generate`
   - Publish Directory: `.output/public`

## 🎨 Design Features

### Color Palette

- **Primary Background**: `#0a0a0f`
- **Accent Primary**: `#6366f1` (Indigo)
- **Accent Secondary**: `#8b5cf6` (Purple)
- **Accent Tertiary**: `#ec4899` (Pink)

### Typography

- **Primary Font**: Inter (body text)
- **Display Font**: Space Grotesk (headings)

### Key Animations

- Typing animation in hero section
- Floating code snippet
- Scroll-triggered reveal animations
- Hover effects on cards and buttons
- Smooth section transitions

## 📧 Contact Form Integration

The contact form is currently set up as a demo. To make it functional, integrate with:

- **Formspree**: [formspree.io](https://formspree.io)
- **EmailJS**: [emailjs.com](https://emailjs.com)
- **Custom Backend**: Build your own API endpoint

Update the `handleSubmit` function in `components/Contact.vue`.

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear cache and reinstall
rm -rf node_modules .nuxt .output
npm install
npm run dev
```

### Port Already in Use

Change the port in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  devServer: {
    port: 3001
  }
})
```

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Nuxt.js](https://nuxt.com)
- Icons from SVG inline code
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Made with ❤️ and Nuxt.js**

For questions or support, please open an issue or contact via the portfolio contact form.
