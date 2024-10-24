import { useLoaderData } from "react-router-dom";
import { getsandwiches } from "../../Services/sandwichesApi";
import styles from "./Sandwiches.module.css";
import SandwichesItem from "../../features/SandwichesItem/SandwichesItem";
function Sandwiches() {
  const sandwiches = useLoaderData();
  return (
    <>
      <div className={styles.sandwichesWrapper}>
        {sandwiches.map((sandwiches) => (
          <SandwichesItem
            key={sandwiches.id}
            name={sandwiches.name}
            dsc={sandwiches.dsc}
            price={sandwiches.price}
            img={sandwiches.img}
          />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const sandwiches = await getsandwiches();
  return sandwiches;
}

export default Sandwiches;
