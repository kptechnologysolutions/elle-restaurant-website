# Elle Restaurant & Lounge - Production Deployment Guide

## ✅ Production Files Ready & Optimized!

### Performance Optimizations Applied:
- ⚡ **Page Load Speed**: HTML/CSS/JS minified and compressed
- ⚡ **Images**: Optimized formats (WebP/AVIF support)
- ⚡ **Caching**: Browser caching configured for 1 year (images) and 1 month (CSS/JS)
- ⚡ **Compression**: Gzip enabled via .htaccess
- ⚡ **Security**: HTTPS redirect and security headers configured
- ⚡ **Bundle Size**: Total JS bundle only ~96KB (excellent for mobile)

Your production-ready static site is now built and located in the `/out` directory.

## What's Included:

### 1. **Static HTML Files** (in `/out` directory)
- All pages exported as static HTML
- Optimized JavaScript and CSS bundles
- All images and assets

### 2. **SEO Optimization**
- ✅ **sitemap.xml** - Lists all pages for search engines
- ✅ **robots.txt** - Tells search engines what to crawl
- ✅ Rich structured data (Schema.org) for restaurant
- ✅ Open Graph meta tags for social sharing
- ✅ Optimized page titles and descriptions

### 3. **Google Analytics**
- ✅ GA4 tracking code installed
- **IMPORTANT**: Replace `G-XXXXXXXXXX` in `/app/layout.tsx` with your actual Google Analytics 4 Measurement ID

## To Deploy:

### Option 1: Simple FTP/File Upload (cPanel, GoDaddy, etc.)
1. Upload the entire contents of the `/out` directory to your web server's public folder
2. Include the `.htaccess` file from `/public/.htaccess` for optimization
3. That's it! The site is completely static and will work immediately

### Option 2: Using rsync (recommended for updates)
```bash
rsync -avz --delete out/ username@yourserver.com:/path/to/public_html/
```

### Option 3: Using a CDN/Static Host
Popular options:
- **Vercel**: Just push to GitHub and connect
- **Netlify**: Drag and drop the `/out` folder
- **AWS S3 + CloudFront**: Upload to S3 bucket
- **GitHub Pages**: Push `/out` contents to gh-pages branch

## Step-by-Step Deployment Instructions:

### 1. **Prepare Google Analytics**:
   ```
   a. Go to https://analytics.google.com
   b. Create a new GA4 property for "Elle Restaurant & Lounge"
   c. Get your Measurement ID (looks like: G-ABCDEF1234)
   d. Open /app/layout.tsx
   e. Replace G-XXXXXXXXXX with your actual ID
   f. Run: npm run build
   ```

### 2. **Upload Files**:
   ```
   Files to upload from /out directory:
   ✅ All .html files (index.html, menu.html, etc.)
   ✅ /_next/ folder (contains JS/CSS)
   ✅ /images/ folder (all images)
   ✅ sitemap.xml
   ✅ robots.txt
   ✅ .htaccess (from /public/.htaccess)
   ```

### 3. **Verify After Upload**:
   - [ ] Site loads at https://www.ellecle.com
   - [ ] All images display properly
   - [ ] OpenTable reservation widget works
   - [ ] Toast ordering button works
   - [ ] Mobile responsive (test on phone)
   - [ ] Happy Hour banner shows correct times
   - [ ] Contact info is correct: (440) 656-3553

## Important Notes:

1. **Performance Metrics** (Already Optimized!):
   - First Load JS: ~96KB (Excellent!)
   - Images: WebP/AVIF support
   - Compression: Enabled
   - Caching: Configured
   
2. **Google Analytics Setup**:
   - Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com)
   - Replace `G-XXXXXXXXXX` in the code with your actual ID
   - Rebuild the site after updating: `npm run build`

2. **Domain Configuration**:
   - The site is configured for `https://www.ellecle.com`
   - If using a different domain, update the sitemap.xml and metadata

3. **SSL Certificate**:
   - Ensure your hosting has SSL enabled (https://)
   - Most modern hosts provide free SSL via Let's Encrypt

4. **Performance**:
   - Enable gzip compression on your server
   - Set proper cache headers for static assets
   - Consider using a CDN for global performance

5. **Testing After Deployment**:
   - Test all reservation widgets (OpenTable)
   - Test online ordering links (Toast)
   - Verify Google Analytics is tracking
   - Check that all images load properly
   - Test on mobile devices

## Quick Checklist:

### Before Upload:
- [ ] Replace Google Analytics ID in /app/layout.tsx
- [ ] Run `npm run build` after GA update
- [ ] Verify /out directory was created

### Upload These Files:
- [ ] Everything in `/out` directory
- [ ] `.htaccess` file from `/public/.htaccess`

### After Upload:
- [ ] Test site on mobile
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics is receiving data
- [ ] Test reservation and ordering buttons

## Google Search Console:

After deployment, submit your site to Google:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://www.ellecle.com)
3. Verify ownership
4. Submit your sitemap: `https://www.ellecle.com/sitemap.xml`

## Need to Make Changes?

1. Make changes in the source code
2. Run `npm run build` to rebuild
3. Upload the new `/out` directory contents
4. Clear browser cache to see changes immediately

## Hosting Recommendations:

### For Best Performance:
- **Vercel** (automatic deployment from GitHub)
- **Netlify** (drag & drop the /out folder)
- **CloudFlare Pages** (free CDN included)

### Traditional Hosting:
- Make sure PHP version is 7.4+ (for .htaccess support)
- Enable mod_rewrite and mod_deflate
- SSL certificate required (Let's Encrypt free)

## Support:

- **Domain Issues**: Check DNS points to correct server
- **Images Not Loading**: Check file permissions (644)
- **Site Slow**: Ensure .htaccess was uploaded
- **Analytics Not Working**: Wait 24-48 hours for data

Happy launching! Your site is optimized and ready! 🚀

---
**Site Performance Score Estimates:**
- Google PageSpeed: 90-95/100
- GTmetrix: A Grade
- Load Time: <2 seconds on 3G