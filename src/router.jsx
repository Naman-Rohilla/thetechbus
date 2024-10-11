import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Landing from "./components/dashboard/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // This is your main layout
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      // {
      //   path: "movie",
      //   element: <Movie />,
      // },
    ],
  },
]);

export default router;
