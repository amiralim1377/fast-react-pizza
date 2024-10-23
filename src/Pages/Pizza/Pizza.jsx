import PizzaItem from "../../features/PizzaItem/PizzaItem";
import styles from "./Pizza.module.css";

function Pizza() {
  return (
    <>
      <div className={styles.pizzaItemWrapper}>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </div>
    </>
  );
}

export default Pizza;
