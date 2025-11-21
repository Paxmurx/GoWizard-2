# GitHub Repository Setup Guide

This guide walks you through setting up your repository on GitHub after exporting the code.

## 📋 Pre-Upload Checklist

Before pushing to GitHub, ensure you have:

- [ ] All necessary files in place
- [ ] `.gitignore` configured
- [ ] `package.json` with correct project name
- [ ] README.md updated with repository URL
- [ ] LICENSE file appropriate for your needs
- [ ] No sensitive data or API keys committed

## 🚀 Initial Repository Setup

### 1. Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Configure your repository:
   - **Name**: `auto-warranty-landing-page` (or your preferred name)
   - **Description**: "Extended auto warranty service landing page with responsive design"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### 2. Initialize Local Repository

```bash
# Navigate to your project directory
cd auto-warranty-landing-page

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial commit - auto warranty landing page

- Responsive design with mobile/tablet/desktop breakpoints
- Parallax scroll effects on hero section
- 30+ vehicle brand selection interface
- FAQ accordion and footer sections
- GitHub Actions CI/CD workflows
- Comprehensive documentation"

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/auto-warranty-landing-page.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## ⚙️ GitHub Repository Settings

### Enable GitHub Pages (Optional)

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: GitHub Actions (recommended) or Deploy from a branch
   - If using branch: Select `gh-pages` branch
3. Save changes
4. Your site will be available at: `https://YOUR_USERNAME.github.io/auto-warranty-landing-page/`

**Note**: If using GitHub Pages, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/auto-warranty-landing-page/', // Your repo name
  // ... rest of config
})
```

### Configure Branch Protection (Recommended)

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1 or more)
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - Select status checks: `build`
3. Save changes

### Setup Secrets (If Needed)

If you need API keys or environment variables:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click "New repository secret"
3. Add secrets as needed:
   - `VITE_API_URL`
   - `VITE_API_KEY`
   - etc.

## 🔄 GitHub Actions Setup

### Enable Actions

1. Go to **Actions** tab
2. Enable workflows if prompted
3. Workflows will run automatically on:
   - Push to `main` or `develop` branches
   - Pull requests to `main` or `develop`

### Verify Workflows

1. Push a commit to trigger workflows
2. Go to **Actions** tab
3. Check that workflows run successfully:
   - ✅ CI workflow (build and lint)
   - ✅ Deploy workflow (if using GitHub Pages)

## 📝 Update Repository Information

### Add Topics

1. Go to repository main page
2. Click the gear icon ⚙️ next to "About"
3. Add topics:
   - `react`
   - `typescript`
   - `tailwindcss`
   - `vite`
   - `landing-page`
   - `responsive-design`
   - `auto-warranty`

### Update About Section

1. Click the gear icon ⚙️ next to "About"
2. Add description: "Extended auto warranty service landing page with responsive design"
3. Add website URL (if deployed)
4. Save changes

## 👥 Collaborators Setup (Optional)

### Add Team Members

1. Go to **Settings** → **Collaborators**
2. Click "Add people"
3. Enter GitHub username or email
4. Select permission level:
   - **Read**: View only
   - **Triage**: Read + manage issues/PRs
   - **Write**: Read + push access
   - **Maintain**: Write + repository settings
   - **Admin**: Full access
5. Send invitation

## 🔔 Notifications Setup

### Configure Notifications

1. Go to **Watch** dropdown (top right)
2. Select notification level:
   - **Participating and @mentions**: Only when involved
   - **All Activity**: Every update
   - **Ignore**: No notifications
   - **Custom**: Choose specific events

### Email Notifications

1. Go to your GitHub **Settings** (profile) → **Notifications**
2. Configure email preferences
3. Choose notification routing

## 📊 Insights and Analytics

### Enable Insights

1. Go to **Insights** tab
2. Review available analytics:
   - **Pulse**: Recent activity
   - **Contributors**: Contribution statistics
   - **Community**: Community standards checklist
   - **Traffic**: Visitor statistics (after 14 days)

### Community Standards

1. Go to **Insights** → **Community**
2. Complete checklist:
   - ✅ Description
   - ✅ README
   - ✅ Code of conduct
   - ✅ Contributing guidelines
   - ✅ License
   - ✅ Issue templates
   - ✅ Pull request template

## 🏷️ Release Management

### Create First Release

1. Go to **Releases** → "Create a new release"
2. Click "Choose a tag" → Create new tag: `v1.0.0`
3. Release title: `v1.0.0 - Initial Release`
4. Description: Copy from CHANGELOG.md
5. Attach binaries (optional)
6. Check "Set as the latest release"
7. Click "Publish release"

## 🔒 Security Settings

### Enable Security Features

1. Go to **Settings** → **Security & analysis**
2. Enable:
   - ✅ Dependency graph
   - ✅ Dependabot alerts
   - ✅ Dependabot security updates
   - ✅ Secret scanning (if available)

### Setup Security Policy

Create `.github/SECURITY.md`:

```markdown
# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please email security@yourcompany.com
instead of using the public issue tracker.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Security Updates

Security updates will be released as soon as possible after a vulnerability is confirmed.
```

## 📱 Social Preview

### Add Social Image

1. Go to **Settings** → scroll to "Social preview"
2. Click "Edit"
3. Upload image (1280x640px recommended)
4. This image appears when sharing on social media

## ✅ Final Checklist

- [ ] Repository created on GitHub
- [ ] Initial commit pushed to `main` branch
- [ ] README.md displays correctly
- [ ] GitHub Actions workflows running
- [ ] Branch protection rules configured
- [ ] Repository description and topics added
- [ ] GitHub Pages configured (if needed)
- [ ] Collaborators added (if applicable)
- [ ] Security features enabled
- [ ] First release created (optional)
- [ ] Social preview image added (optional)

## 🎉 You're Done!

Your repository is now set up and ready for development! Here's what to do next:

1. **Share the repository** with your team
2. **Create your first issue** for tracking work
3. **Start developing** following the CONTRIBUTING.md guidelines
4. **Deploy** using one of the methods in DEPLOYMENT.md
5. **Monitor** Actions and Issues regularly

## 🆘 Common Issues

### Push Rejected
```bash
# If you have divergent branches
git pull origin main --rebase
git push origin main
```

### Authentication Failed
```bash
# Use personal access token instead of password
# Generate token at: https://github.com/settings/tokens
```

### Large Files Warning
```bash
# Remove large files from git history
git filter-branch --tree-filter 'rm -f path/to/large/file' HEAD
```

## 📚 Resources

- [GitHub Docs](https://docs.github.com)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [About Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)

---

**Need help?** Check the [GitHub Community Forum](https://github.community/) or open an issue in your repository.
