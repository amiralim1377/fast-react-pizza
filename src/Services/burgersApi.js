export async function getburgers() {
  const res = await fetch("https://free-food-menus-api-two.vercel.app/burgers");
  const data = await res.json();
  console.log(data);
  return data;
}
