import styles from "./LoopCategory.module.css";
function LoopCategory({ src, category, id }) {
  return (
    <li className={styles.pizzawrapper}>
      <div>
        <img src={src} alt="" />
        <p>{category}</p>
      </div>
    </li>
  );
}

export default LoopCategory;
