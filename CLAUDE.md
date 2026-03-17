# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 開発サーバー起動（通常 localhost:3000）
npm run build    # 本番ビルド（SSG）
npm run start    # ビルド済みファイルをサーブ
```

## Architecture

### ページルーティング（`src/pages/`）

| ページ | 説明 |
|--------|------|
| `index.tsx` | ホーム（最新3件表示） |
| `posts.tsx` | 記事一覧 |
| `posts/[id].tsx` | 記事詳細（MDXレンダリング） |
| `tags/[tag].tsx` | タグ別一覧 |
| `api/getOgpData.ts` | LinkCard用OGP取得API |

全ページ `getStaticProps` / `getStaticPaths` による SSG。

### コンテンツ管理

- 記事は `posts/` ディレクトリに `.mdx` ファイルで管理
- ファイル名がそのまま記事IDになる（例: `2023-10-02.mdx` → `/posts/2023-10-02`）
- フロントマターのスキーマ: `title: string`, `date: string`, `tags: string[]`
- 記事内で `<CodeBlock>` / `<LinkCard url="...">` カスタムコンポーネントが使用可能

### データフロー

```
posts/*.mdx
  → src/lib/posts.ts（gray-matter でパース、next-mdx-remote でシリアライズ）
  → getStaticProps
  → ページコンポーネント
```

`src/lib/posts.ts` がデータ取得のすべてを担う。記事メタデータ取得・タグ抽出・読了時間計算はここで行う。

### コンポーネント構成

Atoms → Molecules → Organisms の3層構成。

- **`src/components/layout.tsx`**: 全ページ共通ラッパー。`home` prop で HomeHeader/PostHeader を切り替える
- **`src/components/organisms/HomeHeader.tsx`**: ヒーローセクション + stickyナビ
- **`src/components/organisms/PostHeader.tsx`**: 記事ページ用 sticky ナビのみ

### スタイリング

- Tailwind CSS + カスタムユーティリティクラス（`src/styles/global.css`）
- 主要なカスタムクラス: `.gradient-text`, `.glass-nav`, `.card-base`, `.tag-pill`, `.post-body`
- デザインテーマ: ライト基調、アクセントカラーはシアン(`#0891b2`)〜バイオレット(`#7c3aed`)グラデーション
- カードスタイルは `.card-base`（白背景、ホバーでシャドウ）

### MDXコンポーネントマッピング

`src/pages/posts/[id].tsx` の `components` オブジェクトで MDX 内のコードブロックを `CodeBlock` にマッピングしている。`<LinkCard>` はクライアント側でOGPを fetch して表示。
