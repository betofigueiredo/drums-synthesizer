import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "components/shared/Layout";

// pages
import Home from "pages/Home";
import SignUp from "pages/SignUp";
import Studio from "pages/Studio";
import MySongs from "pages/MySongs";
import Kits from "pages/Kits";
import BuyMeACoffee from "pages/BuyMeACoffee";

const allRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/kits", element: <Kits /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/songs", element: <MySongs /> },
      { path: "/studio", element: <Studio /> },
      { path: "/studio/:songId", element: <Studio /> },
      { path: "/buy-me-a-coffee", element: <BuyMeACoffee /> },
    ],
  },
]);

const AllRoutes = () => <RouterProvider router={allRoutes} />;

export default AllRoutes;
