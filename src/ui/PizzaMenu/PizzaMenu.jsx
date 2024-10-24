import styles from "./PizzaMenu.module.css";
function PizzaMenu() {
  const url =
    "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1";
  return (
    <div className={styles.pizzawrapper}>
      <div>
        <img src={url} alt="" />
        <p>pizza</p>
      </div>
    </div>
  );
}

export default PizzaMenu;
