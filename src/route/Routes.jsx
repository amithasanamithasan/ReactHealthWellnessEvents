import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Servicedetails from "../pages/Home/Servicedetails/Servicedetails";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import PrivateRoute from "./Privetsrouters/PrivateRoute";
import Userprofile from "../pages/Shared/userprofile/Userprofile";
import Error from "../Error/Error";
import Service from "../pages/Home/Service/Service";
import Fairs from "../pages/Home/Service/HealthFairs/Fairs";
import Contact from "../pages/Shared/Contact/Contact";
import About from "../pages/Shared/About/About";





const router= createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
       errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/services.json')
            },
            {
                path:'/services/:id',
                element:  <PrivateRoute><Servicedetails></Servicedetails></PrivateRoute>,
                loader:()=>fetch('/services.json')
          
            },
            {
             path:'/services',
             element:<PrivateRoute> <Service></Service></PrivateRoute>,
             loader:()=>fetch('/services.json')
            },
            {
              path:'/sevices1',
              element:<Fairs></Fairs>
            },
            {
                path:'/contact',
                element:<Contact></Contact>

            },
            {
                path:'/about',
                element:<About></About>

            },
          
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/userprofile',
                element:<Userprofile></Userprofile>,
            }
           
            
        ]
    }
])

export default router;