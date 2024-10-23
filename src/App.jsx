import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import Menu from "./Pages/Menu/Menu";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Pizza from "./features/Pizza/pizza";

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
