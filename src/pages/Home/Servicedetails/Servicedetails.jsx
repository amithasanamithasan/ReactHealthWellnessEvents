import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import ServicesdetailsCard from "./ServicesdetailsCard";




const Servicedetails = () => {
    const [service , SetServices]=useState({});
  
    const {id} =useParams()

    const services =useLoaderData()

 
useEffect(()=>{
   const servicefind= services?.find(service=> service.id==id)
   SetServices(servicefind);
},[id,services])


    return (
        <div>
            <Header></Header>
           <Navbar></Navbar>
      
       
        <div>
            <div>
                <ServicesdetailsCard service={service}></ServicesdetailsCard>
            </div>

        </div>
        </div>
    );
};

export default Servicedetails;