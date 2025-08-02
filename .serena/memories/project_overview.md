# プロジェクト概要

## 目的
個人の技術ポートフォリオブログサイト（noplab.github.io）
- システム開発者の技術ブログ
- プロジェクト紹介とポートフォリオ表示
- Contentfulを使ったヘッドレスCMSブログ

## 技術スタック
- **フレームワーク**: Astro 5.12.4
- **ランタイム**: Node.js
- **パッケージマネージャ**: pnpm
- **CMS**: Contentful (ヘッドレスCMS)
- **スタイリング**: CSS (カスタムプロパティ使用)
- **言語**: TypeScript
- **デプロイ**: GitHub Pages (noplab.github.io)

## プロジェクト構造
```
├── src/
│   ├── components/     # Astroコンポーネント
│   ├── layouts/        # レイアウトテンプレート
│   ├── pages/          # ページファイル
│   ├── styles/         # グローバルCSS
│   ├── assets/         # 静的アセット
│   └── consts.ts       # 定数定義
├── public/             # 静的ファイル
└── astro.config.mjs    # Astro設定
```