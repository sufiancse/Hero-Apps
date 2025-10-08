import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AppDetails from "../pages/AppDetails";
import ErrorApps from "../pages/ErrorApps";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'/abu',
        Component:<ErrorApps></ErrorApps>
      },
      {
        path:'/app-details/:id',
        errorElement: ErrorApps,
        Component: AppDetails
      }
    ],
  },
]);

export default Router;
