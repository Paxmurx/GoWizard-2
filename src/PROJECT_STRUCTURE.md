# Project Structure Documentation

This document provides a comprehensive overview of the project's file structure and architecture.

## 📁 Directory Overview

```
auto-warranty-landing-page/
├── .github/                      # GitHub-specific files
│   ├── workflows/               # CI/CD workflows
│   │   ├── ci.yml              # Continuous Integration
│   │   └── deploy.yml          # Deployment to GitHub Pages
│   ├── ISSUE_TEMPLATE/         # Issue templates
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── components/                  # React components
│   ├── figma/                  # Figma-specific components (PROTECTED)
│   │   └── ImageWithFallback.tsx
│   ├── ui/                     # Reusable UI components
│   │   ├── accordion.tsx       # FAQ accordion component
│   │   ├── button.tsx          # Button component
│   │   └── [other ui components]
│   └── ResponsiveWrapper.tsx   # Main responsive wrapper with mobile CTA
│
├── imports/                     # Figma imports and assets
│   ├── 1440Homepage.tsx        # Desktop version (1440px)
│   ├── 402HomepageIPhone16Pro.tsx  # Mobile version
│   ├── Container.tsx           # Container component
│   ├── Grid.tsx                # Grid layout component
│   └── svg-*.ts                # SVG imports
│
├── styles/                      # Stylesheets
│   └── globals.css             # Global styles and Tailwind configuration
│
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── App.tsx                      # Main application component
├── Attributions.md              # Third-party attributions
├── CHANGELOG.md                 # Version history
├── CONTRIBUTING.md              # Contribution guidelines
├── DEPLOYMENT.md                # Deployment instructions
├── eslint.config.js            # ESLint configuration
├── index.html                   # HTML entry point
├── LICENSE                      # MIT License
├── main.tsx                     # Application entry point
├── package.json                 # Dependencies and scripts
├── PROJECT_STRUCTURE.md         # This file
├── README.md                    # Project documentation
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript Node configuration
└── vite.config.ts              # Vite build configuration
```

## 🎯 Key Files Explained

### Entry Points

**`index.html`**
- HTML template with root div
- Imports main.tsx as module
- Sets viewport and meta tags

**`main.tsx`**
- Application entry point
- Renders App component to DOM
- Imports global styles

**`App.tsx`**
- Main application component
- Default export required
- Uses ResponsiveWrapper for layout

### Configuration Files

**`package.json`**
- Project dependencies
- Build scripts
- Engine requirements (Node >= 18.0.0)

**`vite.config.ts`**
- Build tool configuration
- Output directory: `/dist`
- Path aliases setup
- Dev server on port 3000

**`tsconfig.json`**
- TypeScript compiler options
- Path aliases configuration
- Strict type checking enabled

**`eslint.config.js`**
- Code quality rules
- React hooks linting
- TypeScript-specific rules

### Styling

**`styles/globals.css`**
- Tailwind CSS imports
- Custom CSS variables
- Typography defaults
- Design tokens

### Components

**`components/ResponsiveWrapper.tsx`**
- Handles desktop/mobile switching
- Includes sticky mobile CTA bar
- Breakpoint: 1024px

**`components/figma/ImageWithFallback.tsx`** (PROTECTED)
- Fallback image handling
- Do not modify this file

**`components/ui/*`**
- Reusable UI components
- Accordion, buttons, cards, etc.
- Consistent styling patterns

### Figma Imports

**`imports/1440Homepage.tsx`**
- Desktop layout (>= 1024px)
- Full feature set
- Parallax effects
- All sections included

**`imports/402HomepageIPhone16Pro.tsx`**
- Mobile layout (< 1024px)
- Touch-optimized
- Streamlined content
- Responsive images

## 🏗️ Architecture Patterns

### Component Structure

```tsx
// Standard component pattern
import React from 'react'
import { ComponentProps } from './types'

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  return (
    <div className="container-styles">
      {/* Component content */}
    </div>
  )
}
```

### Styling Conventions

**Container Pattern:**
```tsx
<div className="bg-[#FCFBFE] rounded-[12px] border-2 border-[#F4F4F5] max-w-[672px]">
```

**Button Pattern:**
```tsx
<button 
  type="button"
  className="rounded-[12px] overflow-hidden active:scale-[0.98] transition-transform"
>
```

### Import Patterns

**Component Imports:**
```tsx
import { ComponentName } from './components/component-name'
import { UIComponent } from './components/ui/ui-component'
```

**Asset Imports:**
```tsx
import svgPaths from './imports/svg-id'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
```

## 🔒 Protected Files

These files should NOT be modified:

- `/components/figma/ImageWithFallback.tsx`
- Any file in `/components/figma/` directory

These are system files managed by Figma Make.

## 📦 Build Output

**Development:**
- Run: `npm run dev`
- Port: 3000
- Hot module replacement enabled

**Production:**
- Run: `npm run build`
- Output: `/dist` directory
- Optimized and minified
- Source maps included

## 🔄 Workflows

### CI Workflow (`.github/workflows/ci.yml`)
- Triggers: Push/PR to main or develop
- Tests: Node 18.x and 20.x
- Steps: Install → Lint → Build
- Status checks required for merge

### Deploy Workflow (`.github/workflows/deploy.yml`)
- Triggers: Push to main
- Deploys to GitHub Pages
- Uses: `/dist` directory
- Automatic deployment

## 🎨 Design System

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `>= 1024px`

### Container Widths
- Mobile: Full width with padding
- Tablet: `672px`
- Desktop: Component-specific

### Colors
- Background: `#FCFBFE`
- Border: `#F4F4F5`
- Primary CTA: Pink gradient

### Border Radius
- Standard: `12px`
- Applied to: Containers, buttons, cards

## 🧩 Component Dependencies

```
App.tsx
└── ResponsiveWrapper.tsx
    ├── 1440Homepage.tsx (Desktop)
    │   ├── Container.tsx
    │   ├── Grid.tsx
    │   ├── Accordion.tsx (UI)
    │   ├── Button.tsx (UI)
    │   └── ImageWithFallback.tsx (Figma)
    │
    └── 402HomepageIPhone16Pro.tsx (Mobile)
        ├── Container.tsx
        ├── Grid.tsx
        └── ImageWithFallback.tsx (Figma)
```

## 📚 Additional Resources

- [README.md](./README.md) - Getting started guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [CONTRIBUTING.md](./CONTRIBUTING.md) - How to contribute
- [CHANGELOG.md](./CHANGELOG.md) - Version history

## 🔍 Finding Files

### By Feature
- **Navigation**: `/imports/1440Homepage.tsx` (lines 1-150)
- **Hero Section**: `/imports/1440Homepage.tsx` (lines 150-300)
- **Vehicle Selection**: `/imports/1440Homepage.tsx` (lines 400-600)
- **FAQ**: `/imports/1440Homepage.tsx` (lines 800-900)
- **Footer**: `/imports/1440Homepage.tsx` (lines 900-1000)

### By Type
- **Components**: `/components/` and `/components/ui/`
- **Layouts**: `/imports/1440Homepage.tsx`, `/imports/402HomepageIPhone16Pro.tsx`
- **Styles**: `/styles/globals.css`
- **Assets**: `/imports/svg-*.ts`
- **Config**: Root directory (`*.config.*`, `tsconfig.json`)

---

Last updated: November 21, 2025
