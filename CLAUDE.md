# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **React** 19 + **TypeScript** 5.9
- **Vite** 8 (build tool + dev server)
- **Tailwind CSS** 4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- **React Router** v7 (SPA routing, `createBrowserRouter`)
- **shadcn/ui** (component library, style: `radix-nova`, icon library: `lucide-react`)
- **Biome** 2 (linter + formatter, replaces ESLint + Prettier)
- **Package manager: pnpm** (do not use npm or yarn)

## Commands

```bash
pnpm dev           # Start dev server
pnpm build         # TypeScript check + Vite production build
pnpm lint          # Biome lint/format check
pnpm lint:fix      # Auto-fix lint/format issues
pnpm preview       # Preview production build locally
```

## Routing

React Router v7 の `createBrowserRouter` を使用。ルート定義は `src/App.tsx` にある。

| Path | Component |
| --- | --- |
| `/` | `HomePage` |
| `/privacy` | `PrivacyPolicyPage` |
| `/terms` | `TermsPage` |

- ページ間のナビゲーションには `<Link to="...">` を使う（`<a href>` は外部リンクのみ）
- 現在のパス取得には `useLocation()` を使う
- `onNavigate` / `currentRoute` props のバケツリレーパターンは廃止済み

## Deployment (GitHub Pages)

### SPA フォールバック

GitHub Pages は静的ホスティングのため、そのままでは `/privacy` への直接アクセスや
リロード時に 404 になる。以下の仕組みで対処済み：

1. `public/404.html` — GitHub Pages が 404 を返す際に提供するページ。
   元の URL を `sessionStorage` に保存してサイトルート (`./`) へリダイレクト。
2. `index.html` の復元スクリプト — `sessionStorage` から URL を取得し、
   `history.replaceState` でパスを復元してから React Router に渡す。

### ベースパスの設定

| デプロイ先 | ビルドコマンド |
| --- | --- |
| カスタムドメイン (`persomaid.app` など) | `pnpm build` |
| GitHub Pages サブディレクトリ (`user.github.io/persomaid-website`) | `VITE_BASE=/persomaid-website/ pnpm build` |

`VITE_BASE` は `vite.config.ts` の `base` オプションに渡され、
React Router の `basename` にも自動的に反映される (`import.meta.env.BASE_URL`)。

## shadcn/ui

Components live in `src/components/ui/`. Add new components via the CLI:

```bash
pnpm dlx shadcn@latest add <component-name>
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
- Run `pnpm lint:fix` before committing

## Project Context

This is the website for the Persomaid app. The mobile app lives in `../persomaid/`.

UI構築に Stitch MCP を使う場合は、ルートの `../CLAUDE.md` の「Design Workflow」セクションを参照。
