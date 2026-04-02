# Persomaid Website — Design System

## Overview

Persomaid ウェブサイトのデザイン言語。
「クリーンなゲームスタジオのランディングページ」をコンセプトとした、明るく洗練されたライトテーマ。
パープルとティールのアクセントが白ベースの背景に映える、モダンな RPG 風 UI。

**Stitch Project ID**: `2620808703873660416`

### 採用した Stitch 参考デザイン

| ファイル | 内容 | 採用した要素 |
|---|---|---|
| `light_home_1.html` | ライトテーマ ホーム v1 | フォンモックアップ・CTA バナーブロック |
| `light_home_2.html` | ライトテーマ ホーム v2 | ベントグリッド(3+2)・プライバシーセクション構造 |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `pm-bg` | `#FAF8FF` | ページ背景（淡ラベンダー白）|
| `pm-surface` | `#FFFFFF` | カード・パネル背景 |
| `pm-surface-low` | `#F4F3FB` | フォームフィールド・チップ背景 |
| `pm-surface-mid` | `#EEEDF5` | ホバー状態・セクション区切り |
| `pm-section-alt` | `#F0EEFF` | ヘッダー・プライバシーセクション背景 |
| `pm-primary` | `#622FE5` | メインボタン・アイコン・アクセント |
| `pm-primary-cont` | `#7B4FFF` | Primary の明るいバリアント |
| `pm-primary-fixed` | `#E7DEFF` | バッジ・チップ背景 |
| `pm-secondary` | `#00BCD4` | ティールアクセント |
| `pm-text` | `#1A1B21` | 基本テキスト |
| `pm-subtext` | `#494455` | サブテキスト・説明文 |
| `pm-border` | `#E5DCFF` | カード枠線・divider |
| `pm-outline` | `#CAC3D8` | 入力枠・グレーボーダー |

### Shadows

```css
--shadow-rpg:    0 4px 24px rgba(123, 79, 255, 0.10);
--shadow-rpg-lg: 0 8px 40px rgba(98,  47, 229, 0.18);
```

---

## Typography

| Font | 用途 | CDN |
|---|---|---|
| Space Grotesk | 見出し・ロゴ・ラベル・ボタン | Google Fonts |
| Manrope | 本文・説明文 | Google Fonts |
| Material Symbols Outlined | アイコン | Google Fonts |

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

---

## Component Patterns

### Navigation Bar
- `sticky top-0`、`bg-white/92` + `backdrop-blur(20px)`
- Border: `1px solid #E5DCFF`
- Shadow: `0 2px 20px rgba(123,79,255,0.08)`
- Logo: gradient text `#622FE5 → #00BCD4` + 🎮 emoji
- Active link: `color: #622FE5` + bottom border 2px

### Hero Section
- 背景: `#FAF8FF` + 右上に大きなパープルブロブ（`blur-[120px]`, 6% opacity）
- 左カラム: バッジ・H1・サブテキスト・CTA ボタン・フィーチャーチップ
- 右カラム: フォンモックアップ（白フレーム + AI キャラクター画像）

### Mode Cards (Bento Grid 3+2)
- Background: `#FFFFFF`、radius: `1rem`
- Left accent bar: `4px` 幅（モード固有色）
- Shadow: `shadow-rpg`
- Hover: `translateY(-4px)` + stronger shadow

| Mode | Accent Color |
|---|---|
| ⚡ スカウター | `#FF9500` (orange) |
| 🗡 クエスト | `#00C853` (green) |
| 🎮 キャラメイク | `#7B4FFF` (purple) |
| 🔍 プロファイリング | `#F44336` (red) |
| 🏰 ギルド | `#00BCD4` (teal) |

### Privacy Section
- Background: `#F0EEFF`
- Shield icon: `#622FE5` 塗りつぶし、`rounded-[1.4rem]`、浮遊アニメーション
- 3 white cards: `bg-white`、`shadow-rpg`、`hover:scale-[1.02]`

### CTA Banner
- Background: `#622FE5`（パープル）、`rounded-[2.5rem]`
- Primary button: `bg-white text-[#622FE5]`
- Secondary button: `bg-white/20 border border-white/30`

### Legal Pages (PP / ToS) Header
- Background: `#F0EEFF`
- Icon block: `w-16 h-16` 、`bg-[#622FE5]`、`rounded-[1rem]`
- Title: Space Grotesk font-black
- Date: `#622FE5` with decorative horizontal lines

### Legal Content Cards
- Background: `#FFFFFF`
- `border-l-4 border-[#622FE5]`
- Hover: `translate-x-1` (subtle slide effect)
- Section number: muted `opacity-40` purple

---

## Pages

| Page | Hash Route | Description |
|---|---|---|
| Home | `#` (default) | ランディングページ |
| Privacy Policy | `#privacy` | プライバシーポリシー |
| Terms of Service | `#terms` | 利用規約 |

---

## Routing

Hash-based SPA routing（react-router-dom 不使用）:

```tsx
window.location.hash → route string
window.addEventListener("hashchange", ...)
```

---

## Atmosphere Keywords

`light mode`, `clean RPG UI`, `game studio landing`, `lavender white`,
`vivid purple accents`, `soft shadows`, `pill buttons`, `bento grid`
