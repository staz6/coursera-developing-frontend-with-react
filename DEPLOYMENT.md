# Deployment Guide

## Deploying Paradise Nursery to GitHub Pages

### Step 1: Install GitHub Pages Package
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://yourusername.github.io/paradise-nursery"
}
```

### Step 3: Deploy
```bash
npm run deploy
```

## Alternative: Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)
3. Your app will be live instantly!

## Alternative: Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## Local Development

The app is already running at `http://localhost:3000` and includes:

✅ **Landing Page** - Beautiful hero section with company info  
✅ **Product Listing** - 8 plants across 4 categories with filtering  
✅ **Shopping Cart** - Full cart functionality with quantity controls  
✅ **Responsive Design** - Works on mobile and desktop  
✅ **Modern UI** - Clean, accessible design with animations  

## Features Demonstrated

- React Context API for state management
- React Router for navigation
- Responsive CSS Grid and Flexbox
- Modern ES6+ JavaScript
- Component-based architecture
- Accessibility features
- Mobile-first design
