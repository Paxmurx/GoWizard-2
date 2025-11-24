# Deployment Guide

This guide covers various deployment options for the Extended Auto Warranty Landing Page.

## 📦 Build Configuration

The project uses Vite as the build tool with the following configuration:

- **Output Directory**: `/dist`
- **Source Maps**: Enabled for debugging
- **Code Splitting**: React vendors separated into their own chunk
- **Asset Optimization**: Automatic optimization of images and assets

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides zero-configuration deployment with automatic HTTPS and global CDN.

#### Via GitHub Integration
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

#### Via CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Vercel Configuration** (vercel.json - optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Option 2: Netlify

Netlify offers continuous deployment with serverless functions support.

#### Via GitHub Integration
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

#### Via CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Netlify Configuration** (netlify.toml):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

Perfect for hosting static sites directly from your GitHub repository.

#### Setup
1. Install gh-pages:
```bash
npm install gh-pages --save-dev
```

2. Add deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` for GitHub Pages base path:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / root

### Option 4: AWS S3 + CloudFront

For enterprise-grade hosting with AWS infrastructure.

#### Setup
1. Build the project:
```bash
npm run build
```

2. Create S3 bucket:
```bash
aws s3 mb s3://your-bucket-name
```

3. Upload build files:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. Configure bucket for static website hosting
5. Create CloudFront distribution pointing to S3 bucket
6. Update DNS records

### Option 5: Docker Container

For containerized deployment to any platform.

**Dockerfile**:
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf**:
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Build and run**:
```bash
# Build image
docker build -t auto-warranty-landing .

# Run container
docker run -p 8080:80 auto-warranty-landing
```

## 🔧 Environment Variables

Before deploying, configure environment variables in your hosting platform:

```bash
VITE_APP_NAME=Extended Auto Warranty
VITE_APP_URL=https://your-domain.com
```

For each platform:
- **Vercel**: Project Settings > Environment Variables
- **Netlify**: Site Settings > Environment Variables
- **GitHub Pages**: Repository Secrets (for Actions)
- **AWS**: Parameter Store or environment variables

## 📊 Performance Optimization

### Pre-deployment Checklist
- [ ] Run `npm run build` to ensure no build errors
- [ ] Test the preview: `npm run preview`
- [ ] Verify all images load correctly
- [ ] Test on multiple devices and browsers
- [ ] Check Lighthouse scores (aim for 90+)
- [ ] Enable compression (Gzip/Brotli)
- [ ] Configure CDN for assets
- [ ] Set up caching headers

### Recommended Headers
```
Cache-Control: public, max-age=31536000, immutable  # For static assets
Cache-Control: no-cache  # For index.html
```

## 🔒 Security Headers

Add these headers in your hosting configuration:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📈 Monitoring

### Recommended Tools
- **Google Analytics**: User behavior tracking
- **Sentry**: Error monitoring
- **LogRocket**: Session replay
- **Lighthouse CI**: Performance monitoring

## 🆘 Troubleshooting

### Issue: 404 on page refresh
**Solution**: Configure your hosting to redirect all routes to `index.html`

### Issue: Assets not loading
**Solution**: Check the `base` path in `vite.config.ts` matches your deployment path

### Issue: Environment variables not working
**Solution**: Ensure variables are prefixed with `VITE_` and restart the dev server

## 📞 Support

For deployment issues, refer to:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Your hosting provider's documentation
- Project maintainer

---

Last updated: November 2025
