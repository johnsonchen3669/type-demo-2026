export type Pizza = { id: string; name: string; price: number };
export type MenuResult = { status: "found"; pizza: Pizza } | { status: "not_found" };
const menu: Pizza[] = [
  { id: "margherita", name: "瑪格麗特", price: 280 },
  { id: "mushroom", name: "蘑菇起司", price: 320 },
  { id: "pepperoni", name: "辣味臘腸", price: 360 },
];
export function findPizza(pizzaId: string): MenuResult {
  const pizza = menu.find((item) => item.id === pizzaId);
  return pizza ? { status: "found", pizza: { ...pizza } } : { status: "not_found" };
}
