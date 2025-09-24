# Quick DreamHost Migration - 15 Minute Guide

## You're Replacing WordPress with Our New Static Site

### Step 1: Prepare Files (2 minutes)
1. Check that your `/out` folder exists and has files
2. Make note of your Google Analytics ID to add later

### Step 2: Access Your DreamHost Site (3 minutes)

**Option A - Using FTP (Recommended):**
```
1. Use FileZilla or any FTP client
2. Host: ftp.ellecle.com (or your DreamHost server)
3. Username: [your DreamHost FTP username]
4. Password: [your FTP password]
5. Port: 22 (for SFTP) or 21 (for FTP)
```

**Option B - Using DreamHost File Manager:**
```
1. Log into panel.dreamhost.com
2. Go to Websites → Manage
3. Click "Manage" next to ellecle.com
4. Click "File Manager"
```

### Step 3: Backup WordPress (5 minutes)

In your site's root directory:
1. Create new folder: `wordpress_OLD`
2. Move these WordPress files/folders into it:
   ```
   - wp-admin/
   - wp-content/
   - wp-includes/
   - All .php files
   - The existing .htaccess
   ```
3. Your root directory should now be EMPTY (except wordpress_OLD folder)

### Step 4: Upload New Site (5 minutes)

Upload everything from your `/out` folder to the root:

```
UPLOAD THESE FILES TO ROOT:
✓ index.html
✓ about.html  
✓ menu.html
✓ contact.html
✓ drinks-wine.html
✓ join-boho.html
✓ privacy-policy.html
✓ 404.html
✓ sitemap.xml
✓ robots.txt
✓ .htaccess (from /out/)

UPLOAD THESE FOLDERS TO ROOT:
✓ /_next/ (entire folder with all contents)
✓ /images/ (entire folder with all contents)
```

### Step 5: Verify It Works!

1. Open your browser (use Incognito/Private mode)
2. Go to https://www.ellecle.com
3. You should see your new site!

### That's It! ✅

## If Something Went Wrong:

**Site not showing?**
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Wait 5 minutes for DreamHost to update

**Still seeing WordPress?**
- Make sure you moved ALL .php files
- Check that index.html is in the root (not in a subfolder)

**Want to roll back?**
- Just move everything from `wordpress_OLD` folder back to root
- Delete the new files
- WordPress will work again

## After Success:

1. **Add Google Analytics:**
   - Get your GA4 ID from analytics.google.com
   - Edit `/app/layout.tsx` 
   - Replace `G-XXXXXXXXXX` with your ID
   - Run `npm run build` again
   - Re-upload the `/out` folder

2. **Update Google Search Console:**
   - Submit your new sitemap: https://www.ellecle.com/sitemap.xml

3. **After 30 days:**
   - Delete the `wordpress_OLD` folder to save space

---

**Total Time: 15 minutes**

**Remember**: The new site is just HTML files - much simpler than WordPress! No database, no PHP, no plugins to break. Just fast, static files.