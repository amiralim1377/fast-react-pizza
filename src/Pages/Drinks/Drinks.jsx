import { useLoaderData } from "react-router-dom";
import { getdrinks } from "../../Services/drinksApi";
import styles from "./Drinks.module.css";
import DrinksItem from "../../features/DrinksItem/DrinksItem";
function Drinks() {
  const drinks = useLoaderData();
  return (
    <>
      <div className={styles.drinksWrapper}>
        {drinks.map((drinks) => (
          <DrinksItem
            key={drinks.id}
            name={drinks.name}
            dsc={drinks.dsc}
            price={drinks.price}
            img={drinks.img}
          />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const drinks = await getdrinks();
  return drinks;
}

export default Drinks;
