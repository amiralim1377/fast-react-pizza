import { NavLink } from "react-router-dom";
import styles from "./NavComponent.module.css";
function NavComponent() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.linkNav} to="homepage">
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.linkNav} to="menu">
            our Menu
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.linkNav} to="aboutus">
            ABOUT US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;
