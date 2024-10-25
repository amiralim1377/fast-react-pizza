import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

import LoopCategory from "../../ui/LoopCategory/LoopCategory";
import category from "../../data/category/category.json";

function Menu() {
  return (
    <ul className={styles.categorywrapper}>
      {category.map((item) => (
        <Link
          className={styles.linkNav}
          to={`/menu/${item.category.toLowerCase().replaceAll(" ", "")}`}
        >
          <LoopCategory key={item.id} src={item.src} category={item.category} />
        </Link>
      ))}
    </ul>
  );
}

export default Menu;
