# GitHub Import Guide

This guide will help you import this project to GitHub and set up everything needed for collaboration and deployment.

## 📋 Prerequisites

- Git installed on your computer
- A GitHub account
- Basic knowledge of Git commands

## 🚀 Quick Start - Import to GitHub

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name**: `auto-warranty-landing-page` (or your preferred name)
   - **Description**: "Extended auto warranty service landing page with responsive design"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Initialize Local Git Repository

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Extended auto warranty landing page"
```

### Step 3: Connect to GitHub and Push

Replace `YOUR_USERNAME` with your GitHub username:

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/auto-warranty-landing-page.git

# Rename branch to main (if not already)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🎯 Verify Import Success

After pushing, verify these items on GitHub:

- [ ] All files are visible in the repository
- [ ] `.github/workflows/` directory contains `ci.yml` and `deploy.yml`
- [ ] `.github/ISSUE_TEMPLATE/` contains bug and feature request templates
- [ ] `.github/PULL_REQUEST_TEMPLATE.md` is present
- [ ] `.gitignore` file is present
- [ ] `README.md` displays correctly

## ⚙️ Configure GitHub Repository Settings

### Enable GitHub Actions

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Actions"** → **"General"** in the left sidebar
4. Under "Actions permissions", ensure:
   - ✅ "Allow all actions and reusable workflows" is selected
5. Click **"Save"**

### Set Up GitHub Pages (Optional)

If you want to deploy automatically to GitHub Pages:

1. Go to **Settings** → **Pages**
2. Under "Source", select:
   - Source: **GitHub Actions**
3. The workflow will automatically deploy on push to `main` branch

### Configure Branch Protection (Recommended)

1. Go to **Settings** → **Branches**
2. Click **"Add branch protection rule"**
3. Branch name pattern: `main`
4. Enable these protections:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
5. Click **"Create"**

## 🔄 CI/CD Workflows

This project includes two GitHub Actions workflows:

### 1. CI Workflow (`.github/workflows/ci.yml`)
**Triggers:** Push or PR to `main` or `develop` branches

**What it does:**
- Runs on Node.js 18.x and 20.x
- Installs dependencies
- Runs linter
- Builds the project
- Verifies build output

### 2. Deploy Workflow (`.github/workflows/deploy.yml`)
**Triggers:** Push to `main` branch or manual trigger

**What it does:**
- Builds the project
- Deploys to GitHub Pages
- Updates live site automatically

**Manual Trigger:**
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages"
3. Click **"Run workflow"**

## 📝 Issue & PR Templates

### Bug Reports
Use `.github/ISSUE_TEMPLATE/bug_report.md` when creating bug reports.

**To create a bug report:**
1. Go to **Issues** tab
2. Click **"New issue"**
3. Select **"Bug Report"**
4. Fill in the template

### Feature Requests
Use `.github/ISSUE_TEMPLATE/feature_request.md` for new feature ideas.

**To request a feature:**
1. Go to **Issues** tab
2. Click **"New issue"**
3. Select **"Feature Request"**
4. Fill in the template

### Pull Requests
All PRs will automatically use `.github/PULL_REQUEST_TEMPLATE.md`.

## 🔐 Secrets & Environment Variables

If you need to add secrets for deployment:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Add your secret name and value
4. Click **"Add secret"**

## 🌿 Branching Strategy

We recommend this Git flow:

```
main (production-ready code)
  ↑
develop (development branch)
  ↑
feature/* (feature branches)
bugfix/* (bug fix branches)
```

### Creating a Feature Branch

```bash
# Switch to develop
git checkout develop

# Create and switch to feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add your feature description"

# Push to GitHub
git push -u origin feature/your-feature-name
```

### Creating a Pull Request

1. Go to your repository on GitHub
2. Click **"Pull requests"** tab
3. Click **"New pull request"**
4. Select your feature branch
5. Fill in the PR template
6. Click **"Create pull request"**

## 📊 Project Status Badges

Add these badges to your README for a professional look:

```markdown
![CI](https://github.com/YOUR_USERNAME/auto-warranty-landing-page/workflows/CI/badge.svg)
![Deploy](https://github.com/YOUR_USERNAME/auto-warranty-landing-page/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![License](https://img.shields.io/badge/license-Private-red)
```

## 🆘 Troubleshooting

### Push Rejected
If push is rejected due to remote changes:
```bash
git pull origin main --rebase
git push origin main
```

### GitHub Actions Failing
1. Check the **Actions** tab for error messages
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### GitHub Pages Not Deploying
1. Check **Settings** → **Pages** is configured correctly
2. Verify workflow completed successfully in **Actions** tab
3. Check workflow permissions in **Settings** → **Actions**

## 🎓 Next Steps

After successful import:

1. ✅ Review and update `README.md` with your repository URL
2. ✅ Configure branch protection rules
3. ✅ Set up GitHub Pages if needed
4. ✅ Invite collaborators (Settings → Collaborators)
5. ✅ Create your first issue or PR
6. ✅ Review and customize CI/CD workflows
7. ✅ Add repository topics for discoverability

## 📚 Additional Resources

- [GitHub Docs - Creating a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Pro Git Book](https://git-scm.com/book/en/v2)

## 💡 Tips

- **Commit Often**: Make small, focused commits with clear messages
- **Use Branches**: Never commit directly to `main`
- **Write Tests**: Keep CI green at all times
- **Document Changes**: Update documentation with code changes
- **Code Review**: Always get PRs reviewed before merging

---

Need help? Check out the [CONTRIBUTING.md](./CONTRIBUTING.md) guide or open an issue!
