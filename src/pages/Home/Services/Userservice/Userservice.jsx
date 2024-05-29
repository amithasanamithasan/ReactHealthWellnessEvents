import { useEffect, useState } from "react";
import Userservicecard from "../Userservicecard/Userservicecard";
import Navbar from "../../../Shared/Navbar/Navbar";


const Userservice = () => {
    const[service,setService]=useState([])
    
    // nodata found dekhanor jonno akta state diclier korta pari
    const[nodata ,setNodata]=useState('')

    useEffect(()=>{
        const favoriteItems =JSON.parse(localStorage.getItem('favorites'));

        if(favoriteItems){
            setService(favoriteItems);
        }
     else{
        setNodata('NO DATA FOUND')
     }
    },[])
    return <div>{nodata?<p className="h[80vh] justify-center items-center">{nodata}</p>
    :<div>

     <div className="gird grid-cols-3">
        <Navbar></Navbar>
       {
       service.map(service=><Userservicecard key={service.id} service={service}></Userservicecard>)
       } 
     </div>

    </div> }</div>
};

export default Userservice;