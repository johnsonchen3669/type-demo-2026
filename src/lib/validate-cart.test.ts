import { expect, test } from "vitest";
import { validateCart } from "./validate-cart";

const draft = { pizzaId: "margherita", quantity: 2, note: "不要辣" };

// 每個失敗案例都要符合相同契約，錯誤提示的文字可以調整。
function expectFailure(raw: unknown) {
  const result = validateCart(raw);
  expect(result.ok).toBe(false);
  expect(result).not.toHaveProperty("cart");
  if (!result.ok) {
    expect(result.errors.length).toBeGreaterThan(0);
    for (const message of result.errors) {
      expect(typeof message).toBe("string");
      expect(message.trim().length).toBeGreaterThan(0);
    }
  }
}

test("驗證並整理文字空白", () => {
  expect(validateCart({ ...draft, pizzaId: " margherita ", note: " 不要辣 " }))
    .toEqual({ ok: true, cart: draft });
});
test.each([0, 11, 1.5, "2", NaN, Infinity])("拒絕無效數量 %s", (quantity) => {
  expectFailure({ ...draft, quantity });
});
test.each([1, 10])("接受邊界數量 %s", (quantity) => {
  expect(validateCart({ ...draft, quantity }))
    .toEqual({ ok: true, cart: { ...draft, quantity } });
});
test.each([null, {}, { ...draft, pizzaId: " " }, { ...draft, note: 42 }])
  ("拒絕錯誤資料 %s", (raw) => {
    expectFailure(raw);
  });

test.each(["pizzaId", "quantity", "note"])("缺少必要欄位 %s", (field) => {
  const raw: Record<string, unknown> = { ...draft };
  delete raw[field];
  expectFailure(raw);
});
