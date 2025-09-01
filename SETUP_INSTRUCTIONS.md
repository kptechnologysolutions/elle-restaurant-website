# Elle Restaurant Website - GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository details:
   - **Repository name**: `elle-restaurant-website`
   - **Description**: `Elle Restaurant & Lounge - Sophisticated Next.js website with bohemian chic design`
   - **Visibility**: Public (or Private if you prefer)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these from the project directory:

```bash
git remote add origin https://github.com/YOUR_USERNAME/elle-restaurant-website.git
git branch -M main
git push -u origin main
```

## Step 3: Invite Your Partner

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Collaborators" in the left sidebar
4. Click "Add people"
5. Enter your partner's GitHub username or email
6. Select their permission level (probably "Write" or "Admin")
7. Click "Add [username] to this repository"

## Project Structure

```
elle-nextjs/
├── app/                    # Next.js App Router pages
│   ├── about/page.tsx     # About page with restaurant story
│   ├── contact/page.tsx   # Contact page with OpenTable widget
│   ├── menu/page.tsx      # Full menu with real items
│   ├── drinks-wine/page.tsx # Cocktails and wine list
│   └── layout.tsx         # Site layout and navigation
├── components/            # Reusable React components
│   ├── HeroBanner.tsx     # Homepage hero section
│   ├── OpenTableWidget.tsx # Reservation widget
│   └── ...
├── public/images/         # All Elle restaurant photos
└── content.json          # Restaurant data and content
```

## Development Setup for Your Partner

Once they clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/elle-restaurant-website.git
cd elle-restaurant-website
npm install
npm run dev
```

The site will be available at `http://localhost:3000`

## Key Features Implemented

✅ **Real Elle Photography** - All your new photos integrated
✅ **OpenTable Integration** - Reservation widget on contact page
✅ **Bohemian Design** - Dancing Script font, sophisticated styling
✅ **Actual Menu Items** - Real dishes and prices from Elle
✅ **SEO Optimized** - Structured data, meta tags
✅ **Responsive Design** - Works on all devices
✅ **Contact Information** - Maps, hours, phone integration

## Next Steps

1. Create the GitHub repository as described above
2. Push the code using the git commands
3. Invite your partner to collaborate
4. They can then clone and start working on the project

The project is ready for deployment to Vercel, Netlify, or any other hosting platform when ready!