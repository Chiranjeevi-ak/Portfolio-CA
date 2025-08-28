# 🔧 GitHub Pages Deployment Troubleshooting

## 🚨 CRITICAL FIXES APPLIED

I've fixed the main issues causing your blank page:

### ✅ Fixed Configuration Files
1. **vite.config.js** - Updated base path to `/portfolio/`
2. **package.json** - Updated homepage to `https://chiranjeevi-ak.github.io/portfolio`
3. **index.html** - Updated meta tags
4. **/.github/workflows/deploy.yml** - Created proper workflow file

### 🎯 IMPORTANT: Update These Values

**Replace these example values with your actual repository details:**

In `vite.config.js` line 7:
```javascript
base: '/portfolio/', // Change 'portfolio' to your actual repository name
```

In `package.json` line 28:
```json
"homepage": "https://chiranjeevi-ak.github.io/portfolio" // Update username and repo name
```

In `index.html` line 13:
```html
<meta property="og:url" content="https://chiranjeevi-ak.github.io/portfolio/" />
```

## 🚀 Deployment Steps

### 1. Update Configuration (Required!)
Update the files above with your actual:
- GitHub username (replace `chiranjeevi-ak`)
- Repository name (replace `portfolio`)

### 2. Commit and Push
```bash
git add .
git commit -m "Fix GitHub Pages configuration and add workflow"
git push
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: **"GitHub Actions"** (not "Deploy from branch")

### 4. Monitor Deployment
1. Go to Actions tab in your repository
2. Watch for the workflow to complete (green checkmark ✅)
3. Check your live site

## 🔍 Common Issues & Solutions

### Issue: Still getting blank page
**Solutions:**
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Check browser console for errors (F12)
- Wait 5-10 minutes for DNS propagation

### Issue: 404 errors for assets
**Cause:** Incorrect base path in vite.config.js
**Solution:** Ensure base path matches your repository name exactly

### Issue: Workflow not running
**Causes:**
- Repository not public
- GitHub Pages not enabled
- Workflow file in wrong location
**Solution:** Check Settings → Pages → Source = "GitHub Actions"

### Issue: Build fails
**Common causes:**
- Missing dependencies
- TypeScript errors
- Import path issues
**Solution:** Check Actions tab for detailed error logs

## 📋 Deployment Checklist

- [ ] Repository is **public**
- [ ] GitHub Pages enabled with **"GitHub Actions"** source
- [ ] Workflow file at `/.github/workflows/deploy.yml`
- [ ] `vite.config.js` base path matches repository name
- [ ] `package.json` homepage URL is correct
- [ ] All files committed and pushed to `main` branch
- [ ] Actions workflow completed successfully (green checkmark)

## 🎯 Expected URLs

If your GitHub username is `chiranjeevi-ak` and repository is `portfolio`:

- **Repository:** `https://github.com/chiranjeevi-ak/portfolio`
- **Live Site:** `https://chiranjeevi-ak.github.io/portfolio`
- **Actions:** `https://github.com/chiranjeevi-ak/portfolio/actions`

## 🆘 Still Not Working?

1. **Check Actions Tab**
   - Look for red ❌ (failed) or yellow 🟡 (running)
   - Click on failed workflows to see error details

2. **Verify File Structure**
   ```
   /.github/workflows/deploy.yml  ✅ Must be here
   /workflows/deploy.yml          ❌ Wrong location
   ```

3. **Test Locally**
   ```bash
   npm run build
   npm run preview
   ```

4. **Browser Developer Tools**
   - F12 → Console tab
   - Look for 404 or other errors
   - Check Network tab for failed requests

## 🎉 Success Indicators

✅ Actions tab shows green checkmark
✅ GitHub Pages URL loads your portfolio
✅ All sections visible and working
✅ Images load properly
✅ Navigation works
✅ Responsive on mobile

Your portfolio should be live within 5 minutes of pushing the corrected configuration!