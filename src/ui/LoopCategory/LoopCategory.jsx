import styles from "./LoopCategory.module.css";
function LoopCategory({ src, category, id }) {
  return (
    <li className={styles.pizzawrapper}>
      <div>
        <img className={styles.divpizzawrapper} src={src} alt="" />
        <p className={styles.pizzawrapperTagP}>{category}</p>
      </div>
    </li>
  );
}

export default LoopCategory;
