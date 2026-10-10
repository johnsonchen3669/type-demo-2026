import { expect, test } from "vitest";
import { validateCart } from "./validate-cart";

const draft = { pizzaId: "margherita", quantity: 2, note: "不要辣" };
test("驗證並整理文字空白", () => {
  expect(validateCart({ ...draft, pizzaId: " margherita ", note: " 不要辣 " }))
    .toEqual({ ok: true, cart: draft });
});
test.each([0, 11, 1.5, "2", NaN, Infinity])("拒絕無效數量 %s", (quantity) => {
  expect(validateCart({ ...draft, quantity }).ok).toEqual(false);
});
test.each([1, 10])("接受邊界數量 %s", (quantity) => {
  expect(validateCart({ ...draft, quantity }).ok).toEqual(true);
});
test.each([null, {}, { ...draft, pizzaId: " " }, { ...draft, note: 42 }])
  ("拒絕錯誤資料 %s", (raw) => {
    expect(validateCart(raw).ok).toEqual(false);
  });
