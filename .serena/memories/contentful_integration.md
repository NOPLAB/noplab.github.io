# Contentful統合

## 設定
- **CMS**: Contentful (ヘッドレスCMS)
- **ライブラリ**: contentful@11.7.15
- **レンダリング**: @contentful/rich-text-html-renderer@17.1.0

## データ構造
ブログ記事には以下のフィールドがある:
- `title` - 記事タイトル
- `heroImage` - ヒーロー画像
- `updatedAt` - 更新日時
- `sys.id` - Contentful ID（URL生成に使用）

## 実装場所
- **ブログ一覧**: `/src/pages/blog/index.astro`
- **記事詳細**: `/src/pages/blog/[...slug].astro`

## 環境変数
```
CONTENTFUL_SPACE=スペースID
CONTENTFUL_ACCESSTOKEN=アクセストークン
CONTENTFUL_ENVIROMENT=環境名
```

## 現在の課題
- ブログ一覧ページのレイアウトが基本的すぎる
- 検索機能がない
- 記事のフィルタリング機能がない