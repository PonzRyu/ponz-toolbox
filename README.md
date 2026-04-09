# ponz-toolbox

Next.js(App Router) + React + TypeScript + Tailwind CSS + shadcn/ui の Web アプリです（リポジトリ直下がアプリ本体）。

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

## コマンド

- **dev**: `npm run dev`
- **lint**: `npm run lint`
- **format**: `npm run format`
- **format:check**: `npm run format:check`

## ディレクトリ構成（方針）

- **`src/app/`**: App Router のルーティング（基本は Server Components）
- **`src/components/ui/`**: shadcn/ui（ベースプリミティブの上に構築される UI）
- **`src/components/app/`**: アプリ固有 UI（ヘッダー等）
- **`src/lib/`**: 汎用ユーティリティ（例: `cn`）

## 採用方針

- **RSC(サーバーコンポーネント)を基本**にし、Web API/状態/イベントが必要な箇所のみ `"use client"` を付与
- **UI は shadcn/ui を採用**（プリミティブ + Tailwind のレイヤリングで拡張可能）
- **スタイルは Tailwind**（クラス順は Prettier + `prettier-plugin-tailwindcss` で整形）

## 次に進むべき実装順（おすすめ）

1. **ルーティング設計**: `src/app/` 配下に画面/レイアウトを追加（まずは情報設計）
2. **データ取得の方針**: RSC での fetch とキャッシュ戦略、Server Actions の利用可否を決める
3. **UI 基盤拡充**: shadcn/ui の必要コンポーネントを追加（例: `card`, `input`, `dialog`）
4. **アプリ固有コンポーネント**: `src/components/app/` に集約し、UI と責務を分離
5. **品質ゲート**: CI で `lint` / `format:check` を実行（必要なら `typecheck` も追加）
