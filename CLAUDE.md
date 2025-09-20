# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack for faster builds
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality and style

## Project Architecture

### Framework and Stack
- **Next.js 15** with App Router architecture
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with custom CSS variables for theming
- **React 19** as the UI library

### Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with font configuration
│   ├── page.tsx        # Home page component
│   ├── globals.css     # Global styles with Tailwind and theme variables
│   └── favicon.ico     # App icon
```

### Key Configuration
- **TypeScript paths**: `@/*` maps to `./src/*` for clean imports
- **Font system**: Geist Sans and Geist Mono loaded via `next/font/google`
- **Theme system**: CSS custom properties with automatic dark/light mode
- **ESLint**: Configured with Next.js core web vitals and TypeScript rules

### Styling Approach
- Tailwind CSS v4 with inline theme configuration
- CSS custom properties for theming (`--background`, `--foreground`)
- Automatic dark mode via `prefers-color-scheme: dark`
- Font variables integrated with Tailwind config

### Development Features
- **Turbopack**: Enabled for faster development and builds
- **Hot reloading**: Automatic page updates during development
- **TypeScript**: Full type checking with strict mode
- **Font optimization**: Automatic font loading and optimization via Next.js

## Code Conventions
- Use TypeScript for all new files
- Import components and utilities using `@/` path alias
- Follow Next.js App Router patterns for routing and layouts
- Use Tailwind classes for styling with custom CSS variables when needed
- Maintain font variable usage: `font-sans` (Geist Sans) and `font-mono` (Geist Mono)