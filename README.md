# 🦷 はち歯科新規開業記念くじ引きアプリ

はち歯科医院の新規開業を記念した特別なくじ引きアプリです。
総額100万円分の豪華景品が当たる楽しい抽選システムです！

## 🎁 景品内容

1. **はち歯科医院おすすめ歯磨き粉♪** (40%の確率)
2. **スタバカード** (40%の確率)
3. **はちクラブ入会無料♪8,800円相当** (20%の確率)

## ✨ 機能

- 🎨 **美しいデザイン**: ポップで楽しいはちみつイエローテーマ
- 📱 **iPad Air最適化**: タッチ操作に最適化されたレスポンシブデザイン
- 🎬 **アニメーション**: 迫力のあるシェイクエフェクトとズームイン演出
- 🎯 **重み付き抽選**: 各景品の当選確率を設定可能
- 🖼️ **画面切り替え**: 当選結果を専用画面で大きく表示

## 🛠️ 技術スタック

- **Framework**: Next.js 14
- **Language**: JavaScript
- **Styling**: CSS Modules
- **Images**: Next.js Image Optimization
- **Deployment**: Vercel対応

## 🚀 セットアップ

### 前提条件
- Node.js 18以上
- npm

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/04Miho07/hachikuji.git

# プロジェクトディレクトリに移動
cd hachikuji

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

アプリケーションは `http://localhost:3000` で確認できます。

## 📁 プロジェクト構造

```
hachikuji/
├── app/
│   ├── page.js                 # メインコンポーネント
│   ├── layout.js              # レイアウト設定
│   ├── page.module.css        # コンポーネント専用スタイル
│   └── decorations.module.css # 背景装飾スタイル
├── public/
│   └── images/                # 景品・ボックス画像
├── styles/
│   └── globals.css            # グローバルスタイル
└── README.md
```

## 🎨 デザイン特徴

- **はちみつイエロー**: 温かみのあるメインカラー
- **幾何学的装飾**: ドット、三角形、円形の楽しい装飾要素
- **中央からの演出**: 景品が画面中央から美しくズームイン
- **絶対配置**: 景品名とボタンの精密な位置調整

## 📱 対応デバイス

- iPad Air（主要ターゲット）
- その他タブレット・デスクトップ
- レスポンシブ対応

## 🔧 カスタマイズ

景品の変更や確率調整は `app/page.js` の `prizes` 配列を編集してください：

```javascript
const prizes = [
  {
    name: '景品名',
    image: '/images/景品画像.png',
    weight: 確率の重み,
  },
  // ...
]
```

## 📄 ライセンス

このプロジェクトは個人利用・商用利用が可能です。

## 🦷 はち歯科医院について

新規開業を記念して、患者様に喜んでいただけるよう心を込めて作成したくじ引きアプリです。
皆様のご来院をお待ちしております！

---

**開発者**: 04Miho07  
**リポジトリ**: https://github.com/04Miho07/hachikuji 