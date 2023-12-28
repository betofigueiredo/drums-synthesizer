import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import Studio from "pages/Studio";
import MySongs from "pages/MySongs";
import Kits from "pages/Kits";

const allRoutes = createBrowserRouter([
  { path: "/", element: <Studio /> },
  { path: "/kits", element: <Kits /> },
  { path: "/songs", element: <MySongs /> },
  { path: "/studio", element: <Studio /> },
  { path: "/studio/:songId", element: <Studio /> },
]);

const AllRoutes = () => <RouterProvider router={allRoutes} />;

export default AllRoutes;
