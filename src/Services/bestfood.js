export async function getbestfood() {
  const res = await fetch(
    "https://free-food-menus-api-two.vercel.app/best-foods"
  );
  const data = await res.json();
  console.log(data);
  return data;
}
