import NavComponent from "../NavComponent/NavComponent";
import styles from "./Header.module.css";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1 className={styles.titleWeb}>FAST REACT PIZZA CO.</h1>
        </div>
      </header>
      <NavComponent />
    </>
  );
}

export default Header;
