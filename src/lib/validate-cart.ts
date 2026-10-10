import { CartSchema } from "./cart-schema";
import type { ValidationResult } from "./cart-schema";

export function validateCart(raw: unknown): ValidationResult {
  const parsed = CartSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.issues.map((issue) =>
      `${issue.path.join(".")}: ${issue.message}`) };
  }
  const cart = {
    ...parsed.data,
    pizzaId: parsed.data.pizzaId.trim(),
    note: parsed.data.note.trim(),
  };
  const errors: string[] = [];
  if (cart.pizzaId.length === 0) errors.push("請選擇 Pizza");
  if (cart.quantity < 1 || cart.quantity > 10) errors.push("數量需為 1 到 10");
  return errors.length > 0 ? { ok: false, errors } : { ok: true, cart };
}
