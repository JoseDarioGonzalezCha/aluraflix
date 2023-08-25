import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import { Home } from "../pages/Home/Home";
import { NewCategory } from "../pages/NewCategory/NewCategory";
import { NewVideo } from "../pages/NewVideo/NewVideo";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/newVideo",
      element: <NewVideo />,
    },
    {
      path: "/newCategory",
      element: <NewCategory />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
