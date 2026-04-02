import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages のサブディレクトリにデプロイする場合は VITE_BASE を設定する
  // 例: VITE_BASE=/persomaid-website/ pnpm build
  // カスタムドメインの場合は設定不要 (デフォルト: '/')
  base: process.env.VITE_BASE ?? "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
