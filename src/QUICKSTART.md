# Quick Start Guide

Get your Extended Auto Warranty Landing Page up and running in minutes!

## ⚡ 5-Minute Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd auto-warranty-landing-page
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

That's it! Your app is now running at `http://localhost:3000` 🎉

## 🚀 Common Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Build
npm run build        # Create production build
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
```

## 📱 Testing Responsive Design

### Browser DevTools
1. Open DevTools (F12 or Cmd+Option+I)
2. Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Test these breakpoints:
   - **Mobile**: 375px, 414px
   - **Tablet**: 768px, 820px
   - **Desktop**: 1024px, 1440px

## 🎨 Making Your First Change

### Update Hero Text
Edit `/imports/1440Homepage.tsx`:
```tsx
// Find the hero section
<h1>Your New Hero Text</h1>
```

### Change CTA Button Text
Search for "Get FREE Quote Now" and replace with your text.

### Update Colors
Edit `/styles/globals.css`:
```css
:root {
  /* Add your custom colors */
  --custom-primary: #yourcolor;
}
```

## 📦 Building for Production

### Create Production Build
```bash
npm run build
```

Output will be in `/dist` directory.

### Test Production Build
```bash
npm run preview
```

Visit `http://localhost:4173` to test the production build.

## 🌐 Deploy to Production

### Quick Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Quick Deploy to Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for more options.

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or change the port in `vite.config.ts`:
```ts
server: {
  port: 3001,  // Use different port
}
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
# Restart TypeScript server in your editor
# VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"
```

## 💡 Tips

### Hot Reload Not Working?
- Save the file (Ctrl+S / Cmd+S)
- Check console for errors
- Restart dev server

### Images Not Loading?
- Check image paths in imports
- Ensure ImageWithFallback is used for new images
- Check browser console for errors

### Styles Not Applying?
- Verify Tailwind class names
- Check for typos in className
- Ensure globals.css is imported

## 📚 Next Steps

1. **Read the README**: [README.md](./README.md)
2. **Review Components**: Check `/components` directory
3. **Understand Structure**: Read [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
4. **Plan Deployment**: Review [DEPLOYMENT.md](./DEPLOYMENT.md)
5. **Start Contributing**: See [CONTRIBUTING.md](./CONTRIBUTING.md)

## 🆘 Need Help?

- Check [README.md](./README.md) for detailed documentation
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues
- Open an issue on GitHub
- Check console for error messages

## 🎯 Common Tasks

### Add a New Component
```bash
# Create new component file
touch components/MyComponent.tsx
```

```tsx
// components/MyComponent.tsx
export function MyComponent() {
  return (
    <div className="bg-[#FCFBFE] rounded-[12px] border-2 border-[#F4F4F5] p-6">
      <h2>My Component</h2>
    </div>
  )
}
```

### Import and Use
```tsx
// App.tsx or other component
import { MyComponent } from './components/MyComponent'

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}
```

### Update Global Styles
```css
/* styles/globals.css */
@import 'tailwindcss';

:root {
  /* Your custom CSS variables */
}
```

## ✅ Checklist for First Deployment

- [ ] Run `npm install` successfully
- [ ] Dev server runs without errors
- [ ] Production build completes (`npm run build`)
- [ ] Preview works (`npm run preview`)
- [ ] Tested on mobile, tablet, and desktop
- [ ] No console errors
- [ ] All images load correctly
- [ ] Environment variables configured (if needed)
- [ ] Choose deployment platform
- [ ] Deploy and verify

---

**Ready to build?** Start with `npm run dev` and happy coding! 🚀
