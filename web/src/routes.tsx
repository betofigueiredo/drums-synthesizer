import { RouterProvider, createBrowserRouter } from "react-router-dom";

// routes
import studioRoutes from "modules/studio/routes";
import socialRoutes from "modules/social/routes";

const allRoutes = createBrowserRouter([...studioRoutes, ...socialRoutes]);

const AllRoutes = () => <RouterProvider router={allRoutes} />;

export default AllRoutes;
