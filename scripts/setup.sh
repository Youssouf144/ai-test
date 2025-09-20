#!/bin/bash

# Setup script for development environment
set -e

echo "🔧 Setting up Decathlon e-commerce development environment..."

# Check Node.js version
echo "📋 Checking Node.js version..."
node_version=$(node -v)
echo "Node.js version: $node_version"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment file if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your actual environment variables"
fi

# Make scripts executable
echo "🔐 Making scripts executable..."
chmod +x scripts/*.sh

# Check if build works
echo "🏗️  Testing build..."
npm run build

echo "✅ Setup complete!"
echo "📋 To get started:"
echo "  1. Update .env.local with your environment variables"
echo "  2. Run 'npm run dev' to start development server"
echo "  3. Open http://localhost:3000 in your browser"