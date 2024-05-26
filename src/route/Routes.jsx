import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Servicedetails from "../pages/Home/Servicedetails/Servicedetails";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";



const router= createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/services.json')
            },
            {
                path:'/services/:id',
                element:<Servicedetails></Servicedetails>,
                loader:()=>fetch('/services.json')
          
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            
        ]
    }
])

export default router;