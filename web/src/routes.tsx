import { RouterProvider, createBrowserRouter } from "react-router-dom";

// routes
import kitsRoutes from "modules/kits/routes";
import studioRoutes from "modules/studio/routes";
import socialRoutes from "modules/social/routes";

const allRoutes = createBrowserRouter([
  ...kitsRoutes,
  ...studioRoutes,
  ...socialRoutes,
]);

const AllRoutes = () => <RouterProvider router={allRoutes} />;

export default AllRoutes;
