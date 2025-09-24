#!/bin/bash

# Kill any existing Next.js processes
echo "Killing any existing Next.js processes..."
ps aux | grep -i next | grep -v grep | awk '{print $2}' | xargs kill -9 2>/dev/null

# Clean directories
echo "Cleaning build directories..."
rm -rf .next
rm -rf out

# Set environment variables
export NODE_OPTIONS='--max-old-space-size=8192'
export NEXT_TELEMETRY_DISABLED=1

# Build the project
echo "Building project..."
npx next build

# Check if out directory was created
if [ -d "out" ]; then
    echo "Build successful! Opening out folder..."
    open out
else
    echo "Build may have failed. Checking for .next folder..."
    if [ -d ".next" ]; then
        echo ".next folder exists, running export..."
        npx next export
        if [ -d "out" ]; then
            echo "Export successful! Opening out folder..."
            open out
        fi
    fi
fi

echo "Done!"