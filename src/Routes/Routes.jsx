import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
]);


export default routes;