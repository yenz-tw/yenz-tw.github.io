# YENZ Design Website

艷世設計官方網站 - 精雕完美，驚艷世界。

## 🚀 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽建置結果
npm run preview
```

## 📁 專案結構

```
yenz-website/
├── src/
│   ├── components/        # 可重用元件
│   ├── layouts/
│   │   └── BaseLayout.astro   # 基礎版型（含音樂播放器、鼠標效果）
│   ├── pages/
│   │   ├── index.astro        # 首頁（含進站動畫）
│   │   ├── about.astro        # 關於艷世
│   │   ├── services.astro     # 服務項目
│   │   ├── works.astro        # 精選作品
│   │   ├── process.astro      # 設計流程
│   │   ├── contact.astro      # 聯繫我們
│   │   └── projects/
│   │       ├── index.astro    # 特別企劃列表
│   │       └── foredu.astro   # 森知殿專案
│   └── styles/
│       └── global.css         # 全域樣式（含所有動畫效果）
├── public/
│   ├── images/            # 圖片資源
│   ├── audio/             # 音樂檔案
│   │   └── ambient.mp3    # 背景音樂（需自行放入）
│   └── favicon.ico
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## ✨ 特色功能

### 進站動畫
- 首頁獨有的震撼進站動畫
- 星空粒子 + 星雲漂浮效果
- 點擊後顯示 Slogan 並過渡到主站

### 流星鼠標
- 金色光暈跟隨效果
- 流星尾跡粒子
- Hover 時變成圓環

### 音樂播放器
- 進站後自動播放（淡入效果）
- 跨頁面記憶播放位置
- 切換頁面無縫銜接

### Reading Bar
- 底部金色進度條
- 微發光效果

### 背景特效
- 浮動光球（Orbs）
- 粒子連線
- 各頁面獨特動畫

## 🎨 品牌配色

```css
/* Forest Greens */
--forest-darkest: #061A12;
--forest-dark: #0A2820;
--forest: #0D3D2E;
--forest-light: #14352A;

/* Golds */
--gold: #C9A962;
--gold-light: #D4BC7F;
--gold-pale: #E8D5A3;

/* Neutrals */
--cream: #FAF8F5;
--white: #FFFFFF;
```

## 🔤 字體

- **Display**: Cinzel（標題、Logo）
- **Body**: Cormorant Garamond（英文內文）
- **Chinese**: Noto Serif TC（中文）

## 📝 待辦事項

- [ ] 放入背景音樂 `/public/audio/ambient.mp3`
- [ ] 放入 Logo 圖片
- [ ] 放入作品圖片
- [ ] 設定 favicon

## 🚢 部署

### Cloudflare Pages

1. 連接 GitHub repo
2. 設定：
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`

### 自訂域名

1. 在 Cloudflare Pages 設定中添加 `yenz.tw`
2. 在 DNS 設定中添加 CNAME 記錄

## 📄 授權

© 2016 - 2025 YENZ Design Studio. All Rights Reserved.
