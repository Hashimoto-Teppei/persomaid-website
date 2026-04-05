# persomaid-website

Persomaid アプリの公式ウェブサイト（ランディングページ）。

## Tech Stack

| 技術 | バージョン |
| --- | --- |
| React | 19 |
| TypeScript | 5.9 |
| Vite | 8 |
| Tailwind CSS | 4 |
| React Router | v7 |
| shadcn/ui | (radix-nova) |
| Biome | 2 |

## セットアップ

```bash
pnpm install
pnpm dev
```

## コマンド

```bash
pnpm dev        # 開発サーバー起動
pnpm build      # 型チェック + プロダクションビルド
pnpm lint       # Biome による lint/format チェック
pnpm lint:fix   # lint/format 自動修正
pnpm preview    # プロダクションビルドのプレビュー
```

## ページ構成

| パス | ページ |
| --- | --- |
| `/` | ホーム（ランディングページ） |
| `/privacy` | プライバシーポリシー |
| `/terms` | 利用規約 |

## デプロイ

GitHub Pages にデプロイしています。`pnpm build` で生成した `dist/` を GitHub Pages に配信します。

### SPA フォールバック

GitHub Pages は静的ホスティングのため、サブパスへの直接アクセスやリロード時に 404 が返されます。以下の仕組みで対処しています。

1. `public/404.html` — 404 発生時に元の URL を `sessionStorage` へ保存し、サイトルートへリダイレクト
2. `index.html` の復元スクリプト — `sessionStorage` から URL を取り出して `history.replaceState` でパスを復元してから React Router に渡す
