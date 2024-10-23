import { Link } from "react-router-dom";
import styles from "./NavComponent.module.css";
function NavComponent() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="homepage" className={styles.linkNav}>
          HomePage
        </Link>
        <br />
        <Link to="menu" className={styles.linkNav}>
          our Menu
        </Link>
        <Link to="aboutus" className={styles.linkNav}>
          ABOUT US
        </Link>
      </nav>
    </div>
  );
}

export default NavComponent;
