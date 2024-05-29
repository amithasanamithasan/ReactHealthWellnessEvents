import { useContext } from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import { Authcontext } from "../../../../providers/AuthProvider";


const Userservicecard = ({service}) => {
    const {user}=useContext(Authcontext)
    
    const{id,name,image,price,short_description,button_text}=service;
    return (
   

        
      
        <div className="card grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-2xl font-serif">{short_description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Joining-date</div> 
            <div className="badge badge-outline">Time-sedule</div>
          </div>
        </div>
      </div>
      </div>
 
    );
};

export default Userservicecard;