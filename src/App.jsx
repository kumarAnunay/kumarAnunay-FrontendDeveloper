import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import CapsuleDetails from "./Components/CapsuleDetails";
import { DataProvider } from "./Components/DataProvider";
import "./App.css";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/capsule-detail",
      element: <CapsuleDetails />,
    },
  ]);
  return (
    <DataProvider>
      <RouterProvider router={routers} />
    </DataProvider>
  );
};

export default App;
