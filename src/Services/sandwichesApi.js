export async function getsandwiches() {
  const res = await fetch(
    "https://free-food-menus-api-two.vercel.app/sandwiches"
  );
  const data = await res.json();
  console.log(data);
  return data;
}
