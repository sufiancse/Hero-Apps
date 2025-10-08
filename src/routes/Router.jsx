import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";

const Router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'/about',
                Component: About
            }
        ]
    }
])

export default Router