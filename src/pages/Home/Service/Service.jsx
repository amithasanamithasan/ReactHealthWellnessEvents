
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Fairs from "./HealthFairs/Fairs";





const Service = () => {
 const services =useLoaderData()

    return (
        <div>
          <Navbar></Navbar>
          <div className=" grid md:grid-cols-1 lg:grid-cols-3  space-x-3 space-y-3">
            
            {
             services?.map(service=><Fairs key={service.id} services={service}></Fairs>)
           }

         </div>
        </div>
    );
};

export default Service;