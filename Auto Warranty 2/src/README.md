# Extended Auto Warranty Landing Page

A fully responsive landing page for an extended auto warranty service, built with React, TypeScript, and Tailwind CSS. Features a modern design with smooth animations, parallax effects, and mobile-first responsive layouts.

> **🚀 Quick Start**: New to this project? Check out [QUICKSTART.md](./QUICKSTART.md) to get up and running in 5 minutes!

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Interactive Components**: Hover states, parallax scrolling, and smooth animations
- **Accessibility**: Semantic HTML with proper button elements and ARIA labels
- **30+ Vehicle Brands**: Comprehensive vehicle selection interface
- **Parallax Effects**: Engaging scroll-based animations on hero images
- **Sticky Mobile CTA**: Persistent call-to-action bar on mobile devices
- **FAQ Section**: Collapsible accordion for frequently asked questions
- **Clean Architecture**: Modular component structure for easy maintenance

## 📋 Tech Stack

- **React 18.3**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS 4.0**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Lucide React**: Icon library

## 🛠️ Installation

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd auto-warranty-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 📦 Build

Create a production build:

```bash
npm run build
```

The optimized build will be output to the `/dist` directory.

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── components/
│   ├── figma/              # Figma-specific components
│   │   └── ImageWithFallback.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   └── ...
│   └── ResponsiveWrapper.tsx
├── imports/
│   ├── 1440Homepage.tsx    # Desktop version (1440px)
│   ├── 402HomepageIPhone16Pro.tsx  # Mobile version
│   └── svg-*.ts            # SVG imports
├── styles/
│   └── globals.css         # Global styles and Tailwind config
├── App.tsx                 # Main app component
├── main.tsx                # Application entry point
├── index.html              # HTML template
└── vite.config.ts          # Vite configuration
```

## 🎨 Design System

### Container Styling
- Background: `#FCFBFE`
- Border: `2px solid #F4F4F5`
- Border Radius: `12px`
- Max Width: `672px` (tablet layout at 768-820px breakpoint)

### Button Styling
- Primary CTA: Pink gradient background
- Border Radius: `12px`
- Active State: `scale-[0.98]`
- All buttons use semantic `<button type="button">` elements

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: >= 1024px

## 🖼️ Key Components

### ResponsiveWrapper
Handles responsive layout switching between mobile and desktop versions, includes sticky mobile CTA bar.

### Desktop Homepage (1440Homepage.tsx)
- Full-width hero section with parallax effect (180px movement, 125% scale)
- Statistics cards
- Problem/benefits sections
- 30+ vehicle brand selection buttons
- Featured provider section
- FAQ accordion
- Footer with navigation links

### Mobile Homepage (402HomepageIPhone16Pro.tsx)
- Optimized for mobile screens
- Sticky bottom CTA bar
- Touch-optimized interactions
- Streamlined content layout

## 🚢 Deployment

### Output Directory
The build output is configured to the `/dist` directory in `vite.config.ts`.

### Deployment Options

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages
Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then run:
```bash
npm install gh-pages --save-dev
npm run deploy
```

## 🔧 Configuration

### Path Aliases
The project uses TypeScript path aliases for cleaner imports:
- `@/*` - Root directory
- `@components/*` - Components directory
- `@imports/*` - Imports directory
- `@styles/*` - Styles directory

### Vite Configuration
- Output directory: `dist`
- Source maps: Enabled in production
- Code splitting: React vendor chunk optimization
- Dev server: Port 3000

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or issues, please contact the project maintainer.

## 📧 Contact

For support or inquiries, please reach out through the appropriate channels.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS