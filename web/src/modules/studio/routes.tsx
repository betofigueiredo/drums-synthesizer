// pages
import Studio from "modules/studio/pages/Studio";

const studioRoutes = [
  { path: "/", element: <Studio /> },
  { path: "/studio", element: <Studio /> },
  { path: "/studio/:songId", element: <Studio /> },
];

export default studioRoutes;
