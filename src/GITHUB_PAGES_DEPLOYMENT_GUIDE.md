# Complete GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 📋 Prerequisites
- GitHub account
- Git installed on your computer
- Your portfolio files ready (which you already have!)

### 🔧 Step 1: Update Configuration Files

Before deploying, you need to replace placeholder values with your actual GitHub information:

#### A. Update `package.json`
Find this line and replace with your details:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME"
```

Example:
```json
"homepage": "https://chiranjeevi-ak.github.io/portfolio"
```

#### B. Update `vite.config.js`
Find this line and replace with your repository name:
```javascript
base: '/YOUR_REPOSITORY_NAME/',
```

Example:
```javascript
base: '/portfolio/',
```

#### C. Update `index.html`
Find this line and replace with your URL:
```html
<meta property="og:url" content="https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/" />
```

Example:
```html
<meta property="og:url" content="https://chiranjeevi-ak.github.io/portfolio/" />
```

### 🗂️ Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., "portfolio", "chiranjeevi-portfolio")
5. Make sure it's **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### 💻 Step 3: Upload Your Code to GitHub

#### Option A: Using VS Code Terminal
1. Open VS Code in your project folder
2. Open Terminal (`Ctrl+`` or `View → Terminal`)
3. Run these commands one by one:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial portfolio commit"

# Set main branch
git branch -M main

# Add your GitHub repository (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

#### Option B: Using GitHub Desktop
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click "Add an Existing Repository from your Hard Drive"
4. Select your portfolio folder
5. Click "Publish repository to GitHub"

### ⚙️ Step 4: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click the **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. GitHub will automatically detect your workflow file

### 🚀 Step 5: Automatic Deployment

That's it! Your deployment will start automatically:

1. GitHub Actions will run your deployment workflow
2. You can watch the progress in the **"Actions"** tab
3. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME
   ```

### 📱 Step 6: Verify Deployment

1. Wait 2-5 minutes for the first deployment
2. Visit your live URL
3. Test on different devices (mobile, tablet, desktop)
4. Check all sections work properly

### 🔄 Future Updates

Every time you push changes to the `main` branch:
1. GitHub Actions will automatically rebuild your site
2. Changes go live in 2-3 minutes
3. No manual deployment needed!

## ✅ What You Don't Need to Install

- **No VS Code extensions required**
- **No Node.js installation needed** (GitHub Actions handles this)
- **No build tools locally** (all handled in the cloud)
- **No deployment packages** (GitHub Actions manages everything)

## 🛠️ Troubleshooting

### If deployment fails:
1. Check the **Actions** tab for error details
2. Ensure all placeholder values are replaced
3. Verify your repository is public
4. Make sure GitHub Pages is enabled in settings

### If site doesn't load:
1. Wait 5-10 minutes for DNS propagation
2. Try opening in incognito/private browser mode
3. Check that the base URL in `vite.config.js` matches your repository name

### If images don't show:
1. Verify all image imports use the correct figma:asset paths
2. Ensure the build process completed successfully
3. Check browser developer tools for 404 errors

## 🎯 Success Checklist

- [ ] Updated `package.json` homepage URL
- [ ] Updated `vite.config.js` base path
- [ ] Updated `index.html` meta tags
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages with "GitHub Actions" source
- [ ] Verified deployment in Actions tab
- [ ] Tested live website

## 📞 Your Live Portfolio

Once deployed, your professional portfolio will showcase:
- 🏠 Professional hero section with your photo
- 👨‍💻 Comprehensive about section
- 💼 Experience timeline across industries
- 🛠️ Skills and technologies showcase
- 🎯 Services you offer
- 🎓 Educational background
- 📞 Contact information with social links

Your portfolio will be fully responsive, SEO-optimized, and automatically deployed with every update!