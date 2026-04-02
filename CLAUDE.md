# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **React** 19 + **TypeScript** 5.9
- **Vite** 8 (build tool + dev server)
- **Tailwind CSS** 4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- **shadcn/ui** (component library, style: `radix-nova`, icon library: `lucide-react`)
- **Biome** 2 (linter + formatter, replaces ESLint + Prettier)

## Commands

```bash
npm run dev        # Start dev server
npm run build      # TypeScript check + Vite production build
npm run lint       # Biome lint/format check
npm run lint:fix   # Auto-fix lint/format issues
npm run preview    # Preview production build locally
```

## shadcn/ui

Components live in `src/components/ui/`. Add new components via the CLI:

```bash
npx shadcn@latest add <component-name>
```

Configuration is in `components.json`. Path aliases are set up via `tsconfig.json`:

| Alias | Path |
| --- | --- |
| `@/components` | `src/components/` |
| `@/components/ui` | `src/components/ui/` |
| `@/lib` | `src/lib/` |
| `@/hooks` | `src/hooks/` |

Use the `cn()` utility from `@/lib/utils` for conditional class merging (wraps `clsx` + `tailwind-merge`).

## Code Style (Biome)

- 2-space indent, double quotes, no semicolons, trailing commas
- Import organization is auto-managed (`organizeImports: on`)
- Run `npm run lint:fix` before committing

## Project Context

This is the website for the Persomaid app. The mobile app lives in `../persomaid/`. Refer to `../persomaid/docs/` for product overview, design language (dark theme, neon accents, game character-maker aesthetic), and feature descriptions when building UI content.
