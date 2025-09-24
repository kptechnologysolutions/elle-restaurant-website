# Fix Google Search Results for Elle Restaurant

## The Problem:
Google is still showing your old WordPress URLs like:
- /happy-hour-menu
- /book-a-table
- /elle-full-menu-2-24
- /will-be-opening-for-lunch-soon

## ✅ Solution 1: Redirects (Already Done)
The updated `.htaccess` file now redirects ALL old URLs to the correct new pages:
- `happy-hour-menu` → `/menu`
- `book-a-table` → `/contact`
- `about-us` → `/about`
- `reservations` → `/contact`
- etc.

## ✅ Solution 2: Update Google Search Console

### Step 1: Access Google Search Console
1. Go to https://search.google.com/search-console
2. Log in with your Google account
3. Select your property: www.ellecle.com

### Step 2: Remove Old URLs
1. Click **Removals** in the left menu
2. Click **New Request**
3. Enter the old URLs one by one:
   - `/happy-hour-menu`
   - `/book-a-table`
   - `/elle-full-menu-2-24`
   - `/will-be-opening-for-lunch-soon`
4. Choose **Remove URL from Google Search**
5. Submit

### Step 3: Submit New Sitemap
1. Click **Sitemaps** in the left menu
2. Remove old sitemap if exists
3. Add new sitemap: `https://www.ellecle.com/sitemap.xml`
4. Click **Submit**

### Step 4: Request Re-indexing
1. Use the **URL Inspection** tool
2. Enter each of your new URLs:
   - `https://www.ellecle.com/`
   - `https://www.ellecle.com/menu`
   - `https://www.ellecle.com/about`
   - `https://www.ellecle.com/contact`
   - `https://www.ellecle.com/drinks-wine`
3. Click **Request Indexing** for each

## ✅ Solution 3: Update Your Google Business Profile

1. Go to https://business.google.com
2. Find Elle Restaurant & Lounge
3. Update your website URL to: https://www.ellecle.com
4. Update menu link to: https://www.ellecle.com/menu
5. Update any other links

## Timeline:
- **Immediate**: Redirects work instantly for visitors
- **1-2 weeks**: Google will start showing new URLs
- **2-4 weeks**: Old URLs disappear from search results

## What Happens Now:
When someone clicks an old Google result:
1. They go to the old URL (e.g., `/happy-hour-menu`)
2. `.htaccess` automatically redirects them to `/menu`
3. They see the correct page!
4. Google learns the new URL and updates its index

## Monitor Progress:
Check Google Search Console weekly to see:
- Crawl stats
- Index coverage
- Search performance
- Any errors

The redirects ensure NO LOST TRAFFIC while Google updates!