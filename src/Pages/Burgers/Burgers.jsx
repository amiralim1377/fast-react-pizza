import { useLoaderData } from "react-router-dom";
import BurgersItem from "../../features/BurgersItem/BurgersItem";
import styles from "./Burgers.module.css";
import { getburgers } from "../../Services/burgersApi";
function Burgers() {
  const burgers = useLoaderData();
  return (
    <>
      <div className={styles.BurgersWrapper}>
        {burgers.map((burgers) => (
          <BurgersItem
            key={burgers.id}
            name={burgers.name}
            dsc={burgers.dsc}
            price={burgers.price}
            img={burgers.img}
          />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const burgers = await getburgers();
  return burgers;
}

export default Burgers;
