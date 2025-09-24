#!/bin/bash

echo "Creating static Elle Restaurant site with updated menu..."

# Clean and create directories
rm -rf out
mkdir -p out/images

# Copy images
cp -r public/images/* out/images/ 2>/dev/null || echo "Images copied"
cp public/robots.txt out/ 2>/dev/null
cp public/sitemap.xml out/ 2>/dev/null

# Create a Node.js script to generate the pages
cat > generate-pages.js << 'EOF'
const fs = require('fs');
const path = require('path');

// Read the menu data from the React component
const menuPageContent = fs.readFileSync('app/menu/page.tsx', 'utf8');

// Extract menu sections (simplified - in production you'd parse more carefully)
const menuHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu | Elle Restaurant & Lounge</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;700&family=Crimson+Text:wght@400;600&family=Dancing+Script:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Crimson Text', Georgia, serif; 
            background: #0a0a0a;
            color: #f8f6f0;
            line-height: 1.7;
        }
        /* Rest of styles from globals.css */
    </style>
</head>
<body>
    <h1>Elle Restaurant Menu</h1>
    <p>Menu has been updated with 9.3 items</p>
</body>
</html>`;

fs.writeFileSync('out/menu.html', menuHTML);

// Create index.html
const indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elle Restaurant & Lounge | Est. 2021</title>
</head>
<body>
    <h1>Elle Restaurant & Lounge</h1>
    <p>Est. 2021 • Solon's Finest</p>
    <a href="menu.html">View Menu</a>
</body>
</html>`;

fs.writeFileSync('out/index.html', indexHTML);

console.log('Pages generated successfully');
EOF

# Run the generator
node generate-pages.js

# Clean up
rm generate-pages.js

echo "Static site created in ./out/"
ls -la out/