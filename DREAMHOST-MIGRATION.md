# DreamHost WordPress to Static Site Migration Guide

## 🚨 IMPORTANT: Backup First!

Before doing anything, backup your current WordPress site:
1. Log into DreamHost Panel → WordPress → Backups
2. Create a full backup of your site
3. Download it to your computer

## Migration Steps:

### Option 1: RECOMMENDED - Clean Installation (Safest)

#### Step 1: Prepare the New Site
1. Make sure you've updated Google Analytics ID in `/app/layout.tsx`
2. Run `npm run build` one final time
3. Your files are ready in the `/out` directory

#### Step 2: Access DreamHost File Manager
1. Log into DreamHost Panel (panel.dreamhost.com)
2. Go to **Websites** → **Manage Websites**
3. Find your domain (ellecle.com)
4. Click **Manage** → **File Manager** (or use FTP)

#### Step 3: Backup & Clear WordPress Files
```bash
# Via FTP or File Manager:
1. Navigate to your domain's root folder (usually /home/username/ellecle.com)
2. Create a backup folder: "wordpress_backup_[date]"
3. Move ALL WordPress files to this backup folder:
   - wp-admin/
   - wp-content/
   - wp-includes/
   - All .php files (index.php, wp-config.php, etc.)
   - .htaccess (save the WordPress one)
```

#### Step 4: Upload New Static Site
1. Upload everything from your `/out` directory to the root folder:
   ```
   Files to upload:
   ✓ index.html
   ✓ about.html
   ✓ menu.html
   ✓ contact.html
   ✓ drinks-wine.html
   ✓ join-boho.html
   ✓ privacy-policy.html
   ✓ 404.html
   ✓ /_next/ folder (entire folder)
   ✓ /images/ folder (entire folder)
   ✓ sitemap.xml
   ✓ robots.txt
   ✓ .htaccess (the new optimized one)
   ```

#### Step 5: Update DreamHost Settings
1. In DreamHost Panel → **Manage Websites**
2. Click **Manage** next to your domain
3. Under **Web Options**:
   - Remove any WordPress-specific settings
   - Ensure PHP version is 7.4+ (for .htaccess support)
   - Keep SSL/HTTPS enabled

### Option 2: Side-by-Side Testing (More Complex)

#### Step 1: Create Subdirectory Test
1. Create a folder: `/home/username/ellecle.com/new-site/`
2. Upload the `/out` contents to this folder
3. Test at: `https://www.ellecle.com/new-site/`
4. Once verified, move files to root

### Option 3: Using DreamHost Staging (If Available)

1. Create a staging site in DreamHost Panel
2. Upload new static files to staging
3. Test thoroughly
4. Use DreamHost's "Push to Live" feature

## Critical Checks After Migration:

### Immediate Tests:
- [ ] Homepage loads correctly
- [ ] All images display
- [ ] Navigation menu works
- [ ] OpenTable reservation widget opens
- [ ] Toast ordering button works
- [ ] Contact phone number (440) 656-3553 is clickable
- [ ] Happy Hour banner shows: Tue-Thu 4-6pm | Fri 4-5pm

### SEO & Analytics:
- [ ] Google Analytics tracking (check Real-Time view)
- [ ] Submit new sitemap to Google Search Console
- [ ] Check that old WordPress URLs redirect properly

## Handling WordPress URLs:

Add these redirects to your .htaccess if you had different WordPress URLs:

```apache
# Redirect old WordPress URLs to new static pages
RedirectMatch 301 ^/blog/menu/?$ /menu.html
RedirectMatch 301 ^/about-us/?$ /about.html
RedirectMatch 301 ^/wine-list/?$ /drinks-wine.html
RedirectMatch 301 ^/reservations/?$ /contact.html
RedirectMatch 301 ^/wp-admin/?$ /
RedirectMatch 301 ^/wp-login.php$ /

# Remove .html extension (optional, for cleaner URLs)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

## Database & WordPress Cleanup:

After confirming the new site works:

1. **Keep WordPress Database** (30 days minimum):
   - Don't delete immediately
   - You might need customer data, orders, etc.

2. **Export Important Data**:
   ```sql
   - Newsletter subscribers
   - Contact form submissions  
   - Any customer data
   - Reservation history (if using WordPress plugin)
   ```

3. **After 30-60 Days**:
   - Delete WordPress database (save space/cost)
   - Remove backup folders
   - Cancel any WordPress-specific addons

## DreamHost-Specific Optimizations:

### Enable FastCGI (if not using):
1. Panel → Manage Websites → Manage
2. Under Web Options → PHP Mode → FastCGI

### CloudFlare Integration (Free CDN):
1. Panel → Websites → Manage
2. Click "Use CloudFlare" (free plan)
3. Benefits: CDN, DDoS protection, faster loading

### Email Settings:
Your email (@ellecle.com) remains unchanged!

## Troubleshooting:

### "Site Not Found" or 404 Errors:
- Check that index.html is in the root folder
- Verify .htaccess was uploaded
- Clear browser cache

### Images Not Loading:
- Check file permissions (should be 644)
- Verify /images/ folder was uploaded
- Check image paths are correct

### Site Shows WordPress Error:
- WordPress files weren't fully removed
- Clear all .php files from root
- Check for hidden .htaccess from WordPress

### Slow Loading:
- Ensure new .htaccess was uploaded (not WordPress one)
- Enable CloudFlare
- Contact DreamHost support for server caching

## DreamHost Support:

If you need help:
1. DreamHost Live Chat (fastest)
2. Tell them: "I'm replacing a WordPress site with a static HTML site"
3. They can help with:
   - File permissions
   - .htaccess configuration
   - DNS settings
   - SSL certificates

## Final Checklist:

Before going live:
- [ ] Backup WordPress site
- [ ] Test new site in subdirectory first
- [ ] Update Google Analytics ID
- [ ] Verify all pages load
- [ ] Test on mobile devices
- [ ] Check contact forms/widgets
- [ ] Verify SSL certificate works
- [ ] Submit new sitemap to Google

After going live:
- [ ] Monitor Google Analytics
- [ ] Check Google Search Console for errors
- [ ] Keep WordPress backup for 30+ days
- [ ] Update any marketing materials with new site

## Rollback Plan:

If something goes wrong:
1. Move static files to a temporary folder
2. Restore WordPress files from backup folder
3. Re-upload WordPress .htaccess
4. Site will be back to WordPress version

---

**Pro Tip**: Do this migration during off-peak hours (early morning) to minimize impact on visitors.

**Estimated Migration Time**: 30-60 minutes

**Need Help?** The static site is much simpler than WordPress - fewer things can break!