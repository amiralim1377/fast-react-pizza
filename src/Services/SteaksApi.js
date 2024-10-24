export async function getsteaks() {
  const res = await fetch("https://free-food-menus-api-two.vercel.app/steaks");
  const data = await res.json();
  console.log(data);
  return data;
}
