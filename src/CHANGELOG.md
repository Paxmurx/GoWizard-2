# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-21

### Added
- Initial release of Extended Auto Warranty Landing Page
- Responsive design with mobile-first approach
- Desktop version (1440px) with full feature set
- Mobile version optimized for iPhone 16 Pro and similar devices
- Parallax scroll effect on hero mechanic image (180px movement, 125% scale)
- 30+ vehicle brand selection buttons
- Interactive FAQ accordion section
- Featured provider section
- Statistics cards showcase
- Problem and benefits sections
- Sticky mobile CTA bar in ResponsiveWrapper component
- Comprehensive footer with navigation links
- Semantic button elements with proper accessibility attributes
- Consistent design system:
  - Container styling: `#FCFBFE` background, `#F4F4F5` borders, `12px` border radius
  - 672px container width for tablet layout (768-820px breakpoint)
  - Pink gradient CTA buttons with `rounded-[12px]` and smooth animations
- GitHub Actions CI/CD workflow
- Comprehensive documentation (README, DEPLOYMENT, CHANGELOG)
- Build configuration with Vite
- TypeScript configuration with path aliases
- ESLint configuration for code quality

### Fixed
- White corner clipping issue on pink CTA buttons during active state animation
- Proper `overflow-hidden` on all button elements
- Border radius consistency across all interactive elements

### Technical Details
- React 18.3 with TypeScript
- Tailwind CSS 4.0 for styling
- Vite for fast development and optimized builds
- Lucide React for icons
- Component-based architecture for maintainability

---

## Release Notes

### Version 1.0.0
This is the first production-ready release of the Extended Auto Warranty Landing Page. The page is fully responsive, accessible, and optimized for performance. It includes all core features and is ready for deployment to production environments.

**Key Features:**
- ✅ Fully responsive design
- ✅ Smooth animations and parallax effects
- ✅ Accessibility compliant
- ✅ Optimized build configuration
- ✅ Ready for GitHub deployment
- ✅ Comprehensive documentation
