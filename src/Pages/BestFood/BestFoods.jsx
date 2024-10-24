import { useLoaderData } from "react-router-dom";
import { getbestfood } from "../../Services/bestfood";
import styles from "./BestFood.module.css";
import BestFoodItem from "../../features/BestFoodItem/BestFoodItem";
function BestFoods() {
  const bestfood = useLoaderData();
  return (
    <>
      <div className={styles.bestfoodWrapper}>
        {bestfood.map((bestfood) => (
          <BestFoodItem
            key={bestfood.id}
            name={bestfood.name}
            dsc={bestfood.dsc}
            price={bestfood.price}
            img={bestfood.img}
          />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const bestfood = await getbestfood();
  return bestfood;
}

export default BestFoods;
