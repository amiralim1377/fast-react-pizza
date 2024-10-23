import { Link, Outlet } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  const url =
    "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1";

  return (
    <div className={styles.categorywrapper}>
      <Link to="/menu/pizza">
        <div className={styles.pizzawrapper}>
          <div>
            <img src={url} alt="" />
            <p>pizza</p>
          </div>
        </div>
      </Link>
      <div className={styles.pizzawrapper}>
        <div>
          <img src={url} alt="" />
          <p>Best Food</p>
        </div>
      </div>
      <div className={styles.pizzawrapper}>
        <div>
          <img src={url} alt="" />
          <p>Burgers</p>
        </div>
      </div>
      <div className={styles.pizzawrapper}>
        <div>
          <img src={url} alt="" />
          <p>Drinks</p>
        </div>
      </div>
      <div className={styles.pizzawrapper}>
        <div>
          <img src={url} alt="" />
          <p>Sandwiches</p>
        </div>
      </div>
      <div className={styles.pizzawrapper}>
        <div>
          <img src={url} alt="" />
          <p>teaks</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Menu;
