# Pizza Lab｜Day27

Astro 提供頁面，TypeScript 模組負責資料與操作。本分支進度為 Day27；`day-27` 到 `day-30` 逐日累積功能，`main` 是最後版本。

使用 Node.js 24，在專案根目錄執行：

```sh
npm ci
npm run dev
```

開啟終端機顯示的本機網址（預設 http://localhost:4321）。

```sh
npm run typecheck
npm test
npm run build
```

`typecheck` 同時檢查 Astro 頁面與 TS 模組；測試用 Vitest 執行。Astro 頁面檢查使用工具支援的 TypeScript 6；純 TS 模組另外使用 TypeScript 7 檢查。所有模型回應與工具要求都是固定模擬資料，不需要金鑰，不會呼叫 AI API。任意自然語句超出案例範圍時會顯示提示。

| 分支 | 本日新增 |
|---|---|
| day-27 | 表單輸入、Zod 驗證、Vitest 案例 |
| day-28 | 模擬結構化草稿與成功／失敗結果 |
| day-29 | 模擬工具要求、固定菜單查詢與結果對應 |
| day-30 | 草稿、菜單與購物車摘要的整合與測試 |

切換進度：`git switch day-27`（請先保存自己的修改），再執行 `npm ci`。

主要程式位於 `src/lib/`，畫面事件放在 `src/client.ts`，頁面在 `src/pages/index.astro`。本日可修改數量，觀察成功資料與欄位錯誤。這是教學範例，購物車只在本次頁面中呈現，不會送出訂單或付款。
