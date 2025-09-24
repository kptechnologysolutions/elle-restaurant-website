#!/bin/bash

echo "Cleaning old build files..."
rm -rf .next
rm -rf out

echo "Starting build..."
export NODE_OPTIONS='--max-old-space-size=8192'
export NEXT_TELEMETRY_DISABLED=1

# Run build with timeout to prevent hanging
timeout 60 npx next build || {
    echo "Build timed out or failed, trying alternative approach..."
    npx next build --no-lint || {
        echo "Alternative build also failed, trying with export..."
        npx next export
    }
}

echo "Build complete! Checking output..."
if [ -d "out" ]; then
    echo "Out folder created successfully"
    ls -la out/menu.html
    echo "Opening out folder..."
    open out
else
    echo "Out folder not created, something went wrong"
fi