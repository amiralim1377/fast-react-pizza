export async function getdrinks() {
  const res = await fetch("https://free-food-menus-api-two.vercel.app/drinks");
  const data = await res.json();
  console.log(data);
  return data;
}
