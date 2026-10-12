import { validateCart } from "./lib/validate-cart";

const form = document.querySelector<HTMLFormElement>("#cart-form");
const pizza = document.querySelector<HTMLSelectElement>("#pizza-id");
const quantity = document.querySelector<HTMLInputElement>("#quantity");
const note = document.querySelector<HTMLInputElement>("#note");
const status = document.querySelector<HTMLParagraphElement>("#form-status");
const output = document.querySelector<HTMLPreElement>("#form-result");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!pizza || !quantity || !note || !status || !output) return;
  // HTML input 的 value 是字串，數量使用 valueAsNumber 取得數字
  const result = validateCart({
    pizzaId: pizza.value, quantity: quantity.valueAsNumber, note: note.value,
  });
  status.textContent = result.ok ? "這份選擇可以繼續使用。" : "請調整輸入內容。";
  output.textContent = JSON.stringify(result, null, 2);
});

import "./menu-client";
