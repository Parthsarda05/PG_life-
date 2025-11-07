# Vercel Deployment Guide

## Quick Start

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration (Recommended for Teams)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/pg-life.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` = Production deployment
   - Every PR = Preview deployment

### Option 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project" → "Deploy" tab
3. Drag your project folder
4. Wait for deployment

## Configuration

The project includes `vercel.json` with:
- Static file serving
- Image caching headers
- Proper routing

**No additional configuration needed!**

## After Deployment

1. **Get your URL**: Vercel provides `https://your-project.vercel.app`
2. **Custom Domain**: Add your domain in Vercel dashboard
3. **Environment Variables**: Not needed (static site)

## Troubleshooting

### Images not loading?
- Check image paths in `pglife image` folder
- Ensure folder name has space (as is)
- Vercel handles spaces automatically

### 404 errors?
- Check `vercel.json` routing configuration
- Ensure all HTML files are in root directory

### Build errors?
- This is a static site - no build needed
- Set Framework Preset to "Other"
- Leave build commands empty

## Updating Your Site

### With CLI:
```bash
vercel --prod
```

### With GitHub:
```bash
git add .
git commit -m "Update site"
git push
# Vercel auto-deploys
```

## Performance Tips

- Images are cached for 1 year (configured in vercel.json)
- Static files are served from CDN
- No server-side processing = fast loading

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

