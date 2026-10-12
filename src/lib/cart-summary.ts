import type { CartDraft } from "./cart-schema";
import { findPizza } from "./menu";
export type CartSummary = { name: string; quantity: number; note: string; total: number };
export type SummaryResult = { status: "success"; summary: CartSummary } | { status: "not_found" };
// 呼叫端先驗證輸入，再把 CartDraft 交給此函式。
export function summarizeCart(cart: CartDraft): SummaryResult {
  const result = findPizza(cart.pizzaId);
  if (result.status !== "found") return result;
  return { status: "success", summary: {
    name: result.pizza.name, quantity: cart.quantity, note: cart.note,
    total: result.pizza.price * cart.quantity,
  } };
}
