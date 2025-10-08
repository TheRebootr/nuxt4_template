# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project is a modern SaaS application frontend built with Nuxt 4, TypeScript, and Nuxt UI. The project uses `pnpm` as the package manager and `just` as the command runner for development tasks.

## Development Commands

The project uses `just` (justfile) for common development tasks:

- **Initial setup**: `just setup` - Installs dependencies and creates .env from .env.example
- **Development server**: `just dev` - Starts Nuxt dev server (also available as `pnpm dev`)
- **Linting**: `just lint` - Run ESLint
- **Type checking**: `just typecheck` - Run TypeScript type checker
- **Quality checks**: `just check` - Runs both lint and typecheck
- **Build**: `pnpm build` - Build production application
- **Preview**: `pnpm preview` - Preview production build

## Architecture

### Stack

- **Framework**: Nuxt 4 with file-based routing
- **UI Library**: Nuxt UI (configured with green primary, slate neutral colors)
- **TypeScript**: Full type safety with vue-tsc
- **Styling**: Tailwind CSS via Nuxt UI
- **Linting**: ESLint with Nuxt preset (double quotes, trailing commas enforced)
- **Package Manager**: pnpm 10.18.0

### Application Structure

All source code lives in the `app/` directory following Nuxt conventions:

- `app/app.vue` - Root Vue component
- `app/app.config.ts` - App-level configuration (UI colors, etc.)
- `app/assets/css/` - Global styles
- `app/components/` - Vue components (auto-imported)
- `app/composables/` - Vue composables (auto-imported)
- `app/layouts/` - Page layouts
- `app/middleware/` - Route middleware
- `app/pages/` - File-based routing (index.vue is home)
- `app/plugins/` - Nuxt plugins
- `app/stores/` - Pinia stores (planned, not yet implemented)
- `app/types/` - TypeScript type definitions
- `app/utils/` - Utility functions (auto-imported)

### Configuration Files

- `nuxt.config.ts` - Nuxt configuration with:

  - Runtime config for environment variables (NUXT_ENVIRONMENT, NUXT_PUBLIC_APP_VERSION)
  - API base URL: `http://localhost:8000/api` (configurable)
  - Home page prerendering enabled
  - Devtools enabled in non-production

- `eslint.config.mjs` - ESLint rules:
  - Double quotes enforced
  - Trailing commas in multiline required

### TypeScript Configuration

Nuxt manages TypeScript config automatically via `.nuxt/` directory. The root `tsconfig.json` references:

- `.nuxt/tsconfig.app.json` - App-side types
- `.nuxt/tsconfig.server.json` - Server-side types
- `.nuxt/tsconfig.shared.json` - Shared types
- `.nuxt/tsconfig.node.json` - Node types

### AI Development Tools

The project is configured with MCP (Model Context Protocol) for AI-assisted development:

- **Nuxt UI MCP Server**: Provides access to Nuxt UI component documentation
- Configuration in `.mcp.json` and `.vscode/settings.json`

## UI Design System

### Visual Design Principles:

- **Philosophy**: "Simplicity that scales" - clean, professional, content-first approach
- **Color Palette**: Neutral grayscale with minimal use of accent colors
- **Typography**: Medium font weights, clear hierarchy, excellent readability
- **Spacing**: Generous whitespace, consistent padding/margins
- **Interactions**: Subtle hover states, fast transitions (150ms)

### Color Specification:

```css
/* Backgrounds */
--bg-primary: #fafafa        /* Main page background */
--bg-secondary: white        /* Card/container backgrounds */
--bg-hover: #f9f9f9         /* Subtle hover backgrounds */
--bg-active: #f5f5f5        /* Active/selected states */

/* Borders */
--border-primary: #e5e5e5    /* Default borders */
--border-hover: #d4d4d4      /* Interactive borders */

/* Text Colors */
--text-primary: #171717      /* Headlines, primary text */
--text-secondary: #6b7280    /* Secondary text, labels */
--text-muted: #a3a3a3        /* Muted text, metadata */
--text-interactive: #525252  /* Interactive elements (hover to primary) */

/* Status Colors */
--status-success: #f0f9ff / #0369a1   /* Complete/Success states */
--status-warning: #fefce8 / #a16207   /* Processing/Warning states */
--status-error: #fef2f2 / #dc2626     /* Error/Attention needed */
--status-neutral: #f5f5f5 / #6b7280   /* Pending/Neutral states */
```

### Component Guidelines:

- **Cards**: White background, `border-[#e5e5e5]`, `rounded-lg`, no shadows
- **Buttons**: Consistent height (`h-8`), subtle styling, clear hover states
- **Typography**: Use `font-medium` for headings, `font-semibold` for emphasis
- **Status Indicators**: Rounded badges with semantic colors, not overly bright
- **Interactive Elements**: Border color changes on hover, not background color changes
- **Forms**: Clean, minimal styling with consistent focus states

## Current State & Roadmap

### Implemented

- ✅ Nuxt 4 foundation with TypeScript
- ✅ Nuxt UI component library
- ✅ File-based routing
- ✅ ESLint + type checking
- ✅ Development tooling (just, pnpm)

### Planned (Not Yet Implemented)

- Authentication UI (login/signup pages)
- Role management and authorization
- Pinia state management stores
- Logging and observability
- Exception handling
- CI/CD pipeline
- Production deployment
- SEO optimization
- Telemetry (metrics, log aggregation)

## Code Style

- Use **double quotes** for strings
- Use **trailing commas** in multiline structures
- Follow Nuxt auto-import conventions (no need to import components, composables, utils)
- Place new components in `app/components/`
- Use TypeScript for all new files
