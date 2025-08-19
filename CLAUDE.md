# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal repository containing a Next.js 15 static site application with TypeScript and Tailwind CSS.

## Project Structure

- **src/app/**: App Router pages and layouts
- **src/components/**: React components
- **src/styles/**: Global styles
- **src/types/**: TypeScript type definitions
- **public/**: Static assets
- **out/**: Static export output directory

## Development Commands

### Core Commands
- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build the application for production (static export)
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

### Installation
- `npm install` - Install all dependencies

## Architecture

### Next.js Configuration
- **Static Export**: Configured with `output: "export"` for static site generation
- **Trailing Slashes**: Enabled for proper static hosting
- **Unoptimized Images**: Set for static export compatibility
- **App Router**: Using Next.js 15 App Router with React Server Components

### Styling
- **Tailwind CSS**: Primary styling framework with custom configuration
- **Dark Mode**: Implemented via `next-themes` with class-based switching
- **Custom Colors**: Extended color palette defined in `tailwind.config.js`
- **Typography Plugin**: `@tailwindcss/typography` for prose content

### TypeScript
- **Path Aliases**: `@/*` maps to `./src/*`
- **Strict Mode**: Currently disabled (`strict: false`)
- **Target**: ES2017

### Key Dependencies
- Next.js 15.4.7
- React 19.1.0
- Tailwind CSS 3.4.17
- next-themes for dark mode support

## Important Notes
- No test files currently exist in the src directory
- Prettier is configured with Tailwind CSS plugin for consistent formatting
- The project exports to static HTML in the `out/` directory