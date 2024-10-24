import { useLoaderData } from "react-router-dom";
import { getsteaks } from "../../Services/SteaksApi";
import styles from "./Steaks.module.css";
import BurgersItem from "../../features/BurgersItem/BurgersItem";
function Sandwiches() {
  const steaks = useLoaderData();
  return (
    <>
      <div className={styles.SteaksWrapper}>
        {steaks.map((steaks) => (
          <BurgersItem
            key={steaks.id}
            name={steaks.name}
            dsc={steaks.dsc}
            price={steaks.price}
            img={steaks.img}
          />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const steaks = await getsteaks();
  return steaks;
}

export default Sandwiches;
