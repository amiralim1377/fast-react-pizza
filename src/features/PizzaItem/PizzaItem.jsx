import styles from "./pizzaItem.module.css";
function PizzaItem() {
  return (
    <>
      <div className={styles.itemWrapper}>
        <div className={styles.imgWrapper}>
          <img
            src="https://fast-react-pizza-menu.netlify.app/pizzas/focaccia.jpg"
            alt=""
          />
        </div>
        <div className={styles.detailsWrapper}>
          <p className={styles.detailsName}>Focaccia</p>
          <p className={styles.detailsDes}>
            Bread with italian olive oil and rosemary
          </p>
          <span>66$</span>
        </div>
      </div>
    </>
  );
}

export default PizzaItem;
