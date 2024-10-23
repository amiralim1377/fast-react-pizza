import { useLoaderData } from "react-router-dom";
import PizzaItem from "../../features/PizzaItem/PizzaItem";
import { getPizza } from "../../Services/pizzaApi";
import styles from "./Pizza.module.css";

function Pizza() {
  const pizzas = useLoaderData();
  return (
    <>
      <div className={styles.pizzaItemWrapper}>
        {pizzas.map((pizza) => (
          <PizzaItem
            key={pizza.id}
            name={pizza.name}
            dsc={pizza.dsc}
            price={pizza.price}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const pizza = await getPizza();
  return pizza;
}

export default Pizza;
