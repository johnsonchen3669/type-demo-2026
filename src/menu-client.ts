import { findPizza } from "./lib/menu";
const form = document.querySelector<HTMLFormElement>("#menu-form");
const input = document.querySelector<HTMLInputElement>("#lookup-id");
const output = document.querySelector<HTMLParagraphElement>("#menu-result");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!input || !output) return;
  const result = findPizza(input.value.trim());
  output.textContent = result.status === "found" ? `${result.pizza.name}：NT$ ${result.pizza.price}` : "菜單找不到這個 Pizza，請重新輸入編號。";
});
