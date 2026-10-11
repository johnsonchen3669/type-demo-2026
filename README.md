# Pizza Lab｜Day 28

Astro 提供操作頁面，TypeScript 模組負責資料規則、查詢與結果。這份範例搭配 Day 27～30 的 AI 協作開發文章；AI 用來協助寫程式，網站本身不呼叫模型。

| 分支 | 本日重點 |
|---|---|
| day-27 | 審查輸入驗證與需求落差 |
| day-28 | 明確的資料契約、實作與測試 Prompt |
| day-29 | 沿用型別增加菜單查詢與摘要計算 |
| day-30 | 表單、驗證、摘要與確認流程的整合驗收 |

各分支保留當天的版本；`main` 目前與 `day-27` 相同，後續依每日進度更新。

## 執行

使用 Node.js 24。先保存自己的修改，再切換 `git switch day-28`，執行：

```sh
npm ci
npm run dev
```

開啟終端機顯示的本機網址，預設為 http://localhost:4321。

```sh
npm run typecheck
npm test
npm run build
```

Astro 頁面依工具使用 TypeScript 6，純 TS 模組另用 TypeScript 7 檢查。Vitest 檢查資料規則與函式結果。安裝版本由 package-lock.json 固定。

## 操作與開發

選擇餐點、數量與備註後按「檢查這份選擇」。數量需是 1～10 的整數，文字會去除前後空白。

[AI 協作開發說明](docs/ai-development.md)提供實作、測試與修正 Prompt。資料模組在 src/lib/，畫面事件在 src/client.ts，操作頁面在 src/pages/index.astro。

這是本頁操作範例，不送出訂單、不付款，也不保存跨頁購物車。
