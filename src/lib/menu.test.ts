import { expect, test } from "vitest";
import { findPizza } from "./menu";
import { summarizeCart } from "./cart-summary";
test.each([
  ["margherita", "瑪格麗特", 280], ["mushroom", "蘑菇起司", 320], ["pepperoni", "辣味臘腸", 360],
])("查詢 %s", (id, name, price) => {
  expect(findPizza(id)).toEqual({ status: "found", pizza: { id, name, price } });
});
test("查無餐點", () => {
  expect(findPizza("missing")).toEqual({ status: "not_found" });
  expect(summarizeCart({ pizzaId: "missing", quantity: 2, note: "" })).toEqual({ status: "not_found" });
});
test.each([1, 3, 10])("摘要保留數量 %s、備註與菜單價格", (quantity) => {
  expect(summarizeCart({ pizzaId: "mushroom", quantity, note: "不要辣" })).toEqual({
    status: "success", summary: { name: "蘑菇起司", quantity, note: "不要辣", total: 320 * quantity },
  });
});
test("回傳物件修改不會改動菜單", () => {
  const result = findPizza("margherita");
  if (result.status !== "found") throw new Error("測試餐點不存在");
  result.pizza.price = 1;
  expect(findPizza("margherita")).toEqual({ status: "found", pizza: { id: "margherita", name: "瑪格麗特", price: 280 } });
});
