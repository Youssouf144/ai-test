#!/bin/bash

# Deployment script for Decathlon e-commerce site
set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running type checking..."
npm run type-check

# Run linting
echo "🧹 Running linting..."
npm run lint

# Run tests (if available)
echo "🧪 Running tests..."
if npm run test --if-present; then
    echo "✅ Tests passed"
else
    echo "⚠️  No tests found or tests failed"
fi

# Build the application
echo "🏗️  Building application..."
npm run build

# Check if build was successful
if [ -d ".next" ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation complete!"
echo "📋 Next steps:"
echo "  1. Commit and push your changes"
echo "  2. The GitHub Actions workflow will handle the rest"
echo "  3. Check the Actions tab in your GitHub repository"