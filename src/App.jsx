import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as pizzaloader } from "./Pages/Pizza/pizza";
import { loader as bestFoodloader } from "./Pages/BestFood/BestFoods";
import { loader as burgersloader } from "./Pages/Burgers/Burgers";
import AppLayout from "./AppLayout/AppLayout";
import Menu from "./Pages/Menu/Menu";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Pizza from "./Pages/Pizza/pizza";
import BestFoods from "./Pages/BestFood/BestFoods";
import Drinks from "./Pages/Drinks/Drinks";
import Sandwiches from "./Pages/Sandwiches/Sandwiches";
import Steaks from "./Pages/Steaks/Steaks";
import Burgers from "./Pages/Burgers/Burgers";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/pizza",
        element: <Pizza />,
        loader: pizzaloader,
      },
      {
        path: "menu/bestfood",
        element: <BestFoods />,
        loader: bestFoodloader,
      },
      {
        path: "menu/burgers",
        element: <Burgers />,
        loader: burgersloader,
      },
      {
        path: "menu/drinks",
        element: <Drinks />,
      },
      {
        path: "menu/sandwiches",
        element: <Sandwiches />,
      },
      {
        path: "menu/steaks",
        element: <Steaks />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
