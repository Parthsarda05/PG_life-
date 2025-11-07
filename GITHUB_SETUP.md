# GitHub Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `pg-life` (or any name you prefer)
   - **Description**: "PG Life - Paying Guest Accommodation Website"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Copy Repository URL

After creating the repository, GitHub will show you a page with commands. Copy the repository URL:
- It will look like: `https://github.com/yourusername/pg-life.git`
- Or SSH: `git@github.com:yourusername/pg-life.git`

## Step 3: Connect and Push

Run these commands in your terminal (replace with your actual repository URL):

```bash
# Add remote repository
git remote add origin https://github.com/yourusername/pg-life.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create pg-life --public --source=. --remote=origin --push
```

## After Pushing

1. Visit your repository on GitHub
2. You should see all your files
3. The repository is now ready for Vercel deployment!

## Next Steps

1. **Deploy to Vercel**: Follow instructions in `DEPLOYMENT.md`
2. **Update README**: Add your live site URL to README.md
3. **Add License**: Consider adding a LICENSE file

