#!/bin/bash

cd /Users/halpickus/Documents/Projects/56-restaurant-group/elle-nextjs

export PORT=3003
export NODE_OPTIONS='--max-old-space-size=8192'

echo "Starting Elle Restaurant development server on port $PORT with Turbo mode..."
NEXT_TELEMETRY_DISABLED=1 node node_modules/next/dist/bin/next dev --turbo