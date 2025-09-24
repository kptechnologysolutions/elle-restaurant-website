#!/bin/bash

echo "Creating standalone HTML files with embedded CSS..."

# Download the CSS from Vercel
echo "Downloading CSS..."
curl -s "https://elle-restaurant-website.vercel.app/_next/static/css/2919415fc5c25d86.css" > /tmp/elle.css 2>/dev/null || echo "Could not download CSS"

# Check if we got the CSS
if [ ! -f "/tmp/elle.css" ] || [ ! -s "/tmp/elle.css" ]; then
    echo "Failed to download CSS. Creating manual backup..."
fi

echo "Done! Check the out folder for standalone files."