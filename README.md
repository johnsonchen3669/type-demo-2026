# Pizza Lab｜Day 29

Astro 提供操作頁面，TypeScript 模組負責資料規則、查詢與結果。這份範例搭配 Day 27～30 的 AI 協作開發文章；AI 用來協助寫程式，網站本身不呼叫模型。

| 分支 | 本日重點 |
|---|---|
| day-27 | 審查輸入驗證與需求落差 |
| day-28 | 明確的資料契約、實作與測試 Prompt |
| day-29 | 菜單查詢、摘要與 ESLint 程式檢查 |
| day-30 | 畫面整合與 Playwright 操作驗收 |

各分支保留當天的版本；`main` 目前包含 Day 27＋Day 28＋Day 29，與 `day-29` 相同，後續依每日進度更新。

## 執行

使用 Node.js 24。先保存自己的修改，再切換 `git switch day-29`，執行：

```sh
npm ci
npm run dev
```

開啟終端機顯示的本機網址，預設為 http://localhost:4321。

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Astro 頁面依工具使用 TypeScript 6，純 TS 模組另用 TypeScript 7 檢查。Vitest 檢查資料規則與函式結果。安裝版本由 package-lock.json 固定。

## 本日新增

Day 29 增加菜單查詢、摘要及 ESLint 檢查。Lint 規則與審查練習放在 [lint-review.md](docs/lint-review.md)，也可由首頁開啟。

## 操作與開發

選擇餐點、數量與備註後按「檢查這份選擇」。數量需是 1～10 的整數，文字會去除前後空白。
摘要函式先透過測試確認結果，畫面目前提供輸入驗證與菜單查詢。首頁的「本日重點」可開啟開發說明。
餐點查詢可輸入 margherita、mushroom、pepperoni，輸入 missing 觀察查無結果。

[AI 協作開發說明](docs/ai-development.md)提供實作、測試與修正 Prompt。資料模組在 src/lib/，畫面事件在 src/client.ts，操作頁面在 src/pages/index.astro。

這是本頁操作範例，不送出訂單、不付款，也不保存跨頁購物車。
