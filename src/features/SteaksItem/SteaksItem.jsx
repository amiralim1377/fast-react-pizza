import styles from "./SteaksItem.module.css";

function SteaksItem({ name, dsc, price, img }) {
  return (
    <>
      <div className={styles.itemWrapper}>
        <div className={styles.imgWrapper}>
          <img src={img} alt={dsc} />
        </div>
        <div className={styles.detailsWrapper}>
          <p className={styles.detailsName}>{name}</p>
          <p className={styles.detailsDes}>{dsc}</p>
          <span>{price}$</span>
        </div>
      </div>
    </>
  );
}

export default SteaksItem;
