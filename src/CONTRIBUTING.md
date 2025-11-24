# Contributing to Extended Auto Warranty Landing Page

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to a code of conduct that all contributors are expected to follow. Please be respectful and professional in all interactions.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/auto-warranty-landing-page.git
cd auto-warranty-landing-page
```

3. Install dependencies:
```bash
npm install
```

4. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

5. Start the development server:
```bash
npm run dev
```

## Development Workflow

### Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Project Structure

```
/
├── components/          # React components
│   ├── figma/          # Figma-specific components (protected)
│   ├── ui/             # Reusable UI components
│   └── ResponsiveWrapper.tsx
├── imports/            # Figma imports and SVG assets
├── styles/             # Global styles
└── App.tsx            # Main application component
```

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Avoid `any` types when possible
- Define proper interfaces and types
- Use type inference where appropriate

### React

- Use functional components with hooks
- Prefer named exports for components
- Keep components small and focused
- Use proper prop typing

### Tailwind CSS

- Follow existing design system patterns
- **Important**: Do NOT add Tailwind classes for:
  - Font size (e.g., `text-2xl`)
  - Font weight (e.g., `font-bold`)
  - Line height (e.g., `leading-none`)
  - Unless explicitly requested
- Use consistent spacing and sizing
- Maintain responsive breakpoints (768px, 1024px)

### Design System Consistency

Maintain these standards throughout the project:

**Container Styling:**
```tsx
className="bg-[#FCFBFE] rounded-[12px] border-2 border-[#F4F4F5]"
```

**Button Styling:**
```tsx
<button 
  type="button"
  className="rounded-[12px] overflow-hidden active:scale-[0.98]"
>
```

**Responsive Width:**
- Tablet (768-820px): `max-w-[672px]`

### File Naming

- React components: PascalCase (e.g., `ResponsiveWrapper.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Styles: kebab-case (e.g., `globals.css`)

## Commit Guidelines

We follow conventional commit messages for clarity and automation.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(hero): add parallax scroll effect to mechanic image
fix(buttons): resolve white corner clipping on active state
docs(readme): update deployment instructions
style(components): apply consistent border radius across CTAs
```

## Pull Request Process

### Before Submitting

1. **Test your changes:**
```bash
npm run build
npm run preview
```

2. **Run linter:**
```bash
npm run lint
```

3. **Update documentation** if needed

4. **Test responsive design:**
   - Mobile (< 768px)
   - Tablet (768px - 1023px)
   - Desktop (>= 1024px)

### Submitting a PR

1. Push your branch to your fork
2. Create a Pull Request to the main repository
3. Fill out the PR template completely
4. Link any related issues
5. Wait for review

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] Build succeeds
- [ ] Linter passes

## Screenshots
If applicable, add screenshots

## Related Issues
Closes #(issue number)
```

### Review Process

- At least one approval required
- All CI checks must pass
- No merge conflicts
- Code follows project standards

## Protected Files

These files should NOT be modified:

- `/components/figma/ImageWithFallback.tsx`
- Any files in `/components/figma/` directory

## Questions or Issues?

- Open an issue for bugs or feature requests
- Use discussions for questions
- Contact maintainers for urgent matters

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
