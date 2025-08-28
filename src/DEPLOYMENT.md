# GitHub Pages Deployment Guide

## Quick Setup Instructions

### 1. Update Configuration Files
Before deploying, you need to update these files with your actual GitHub information:

**In `package.json`:**
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME"
```

**In `vite.config.js`:**
```javascript
base: '/YOUR_REPOSITORY_NAME/',
```

**In `index.html`:**
```html
<meta property="og:url" content="https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/" />
```

### 2. GitHub Repository Setup

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The deployment will automatically start when you push to the main branch

### 4. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm install
npm run build
npm run deploy
```

## Features Included

✅ **Automatic Deployment**: Deploys on every push to main branch  
✅ **Optimized Build**: Minified CSS/JS for fast loading  
✅ **SEO Ready**: Meta tags and Open Graph tags included  
✅ **Mobile Responsive**: Works perfectly on all devices  
✅ **Professional Design**: Clean, modern portfolio layout  

## Your Portfolio Sections

- 🏠 **Hero Section**: Professional introduction with photo
- 👨‍💻 **About**: Detailed background and expertise
- 💼 **Experience**: Timeline of professional roles
- 🛠️ **Skills**: Technical skills showcase
- 🎯 **Services**: What you offer to clients
- 🎓 **Education**: Academic background
- 📞 **Contact**: Get in touch information

## Live URL

Once deployed, your portfolio will be available at:
`https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME`

## Troubleshooting

If deployment fails:
1. Check that GitHub Pages is enabled in repository settings
2. Ensure all file paths in config files are correct
3. Check the Actions tab for detailed error logs

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `/public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update the base URL in `vite.config.js` to `/`