import * as z from "zod";

// 基本欄位也能提供給結構化輸出；本機驗證再處理內容規則
export const CartSchema = z.object({
  pizzaId: z.string(),
  quantity: z.number().int(),
  note: z.string(),
});
export type CartDraft = z.infer<typeof CartSchema>;
export type ValidationResult =
  | { ok: true; cart: CartDraft }
  | { ok: false; errors: string[] };
