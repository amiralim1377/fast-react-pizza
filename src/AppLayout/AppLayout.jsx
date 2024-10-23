import { Outlet } from "react-router-dom";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import styles from "../AppLayout/AppLayout.module.css";

function AppLayout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default AppLayout;
