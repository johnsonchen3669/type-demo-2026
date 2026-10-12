# Day 29｜ESLint 審查練習

新增菜單查詢與摘要後，執行 `npm run lint`，再跑型別檢查與新舊測試。
本專案使用兩項寫法規則：`no-explicit-any` 與 `no-non-null-assertion`。
下面是教學練習，正式程式已處理找不到餐點的情況。

```ts
function findPizza(pizzaId: string): MenuResult {
  const pizza = menu.find((item) => item.id === pizzaId)!;
  return { status: "found", pizza };
}
```

`!` 讓 TypeScript 接受值存在的宣告，ESLint 會按照本專案規則指出它。
查詢仍可能找不到餐點，請改成判斷結果並回傳 `not_found`。
如果把參數改成 `pizzaId: any`，另一項規則也會指出問題。

## 交給 AI 的修正要求

```text
lint 檢查指出 findPizza 裡的 ! 不符合專案規則，請幫我修正。

找不到餐點時，應回傳 not_found；找到時，維持原本的回傳格式。
請保留 lint 規則，也加上找不到餐點的測試。

修改後，執行 lint、型別檢查與所有測試，告訴我有沒有通過。
```

## 修改後也要讀一次

用 `git diff` 查看尚未暫存的修改，確認 AI 沒有改掉原本的驗證規則或測試要求。
知名開源社群開發者 Anthony Fu 的新作 [pulls.review](https://pulls.review/)
可以把 GitHub PR 的修改分組並整理摘要，方便逐組閱讀。
[官方說明](https://github.com/antfu/pulls.review#readme)提供使用方式。
本範例不串接這個服務，也不需要模型金鑰。
