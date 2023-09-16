import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import CapsuleDetails from "./Components/CapsuleDetails";
import { DataProvider } from "./Components/DataProvider";
import "./App.css";
import Launches from "./Components/Launches";
import Mission from "./Components/Mission";
import Carrers from "./Components/Carrers";
import Updates from "./Components/Updates";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Capsules from "./Components/Capsules";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/capsules",
      element: <Capsules />,
    },
    {
      path: "/capsule-detail",
      element: <CapsuleDetails />,
    },
    {
      path: "/mission",
      element: <Mission />,
    },
    {
      path: "/launches",
      element: <Launches />,
    },
    {
      path: "/carrers",
      element: <Carrers />,
    },
    {
      path: "/updates",
      element: <Updates />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
  ]);
  return (
    <DataProvider>
      <RouterProvider router={routers} />
    </DataProvider>
  );
};

export default App;
