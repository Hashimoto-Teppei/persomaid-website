# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **React** 19 + **TypeScript** 5.9
- **Vite** 8 (build tool + dev server)
- **Tailwind CSS** 4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- **Biome** 2 (linter + formatter, replaces ESLint + Prettier)

## Commands

```bash
npm run dev        # Start dev server
npm run build      # TypeScript check + Vite production build
npm run lint       # Biome lint/format check
npm run lint:fix   # Auto-fix lint/format issues
npm run preview    # Preview production build locally
```

## Code Style (Biome)

- 2-space indent, double quotes, no semicolons, trailing commas
- Import organization is auto-managed (`organizeImports: on`)
- Run `npm run lint:fix` before committing

## Project Context

This is the website for the Persomaid app. The mobile app lives in `../persomaid/`. Refer to `../persomaid/docs/` for product overview, design language (dark theme, neon accents, game character-maker aesthetic), and feature descriptions when building UI content.
