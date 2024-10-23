export async function getPizza() {
  const res = await fetch("https://free-food-menus-api-two.vercel.app/pizzas");
  const data = await res.json();
  console.log(data);
  return data;
}
