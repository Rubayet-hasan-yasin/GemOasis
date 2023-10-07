import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/Login/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]);


export default routes;