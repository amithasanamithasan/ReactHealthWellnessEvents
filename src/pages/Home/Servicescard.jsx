import { Link } from "react-router-dom";


const Servicescard = ({services}) => {


    const{id,name,image,price,short_description,button_text}=services;


    
  
    return (
       
      
        
        <div className="card card-compact bg-base-100 shadow-xl pl-2  pr-2 m-5 md:m-2 ">
            
  <figure><img data-aos="zoom-in-up" src={image} alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="card-title text-cyan-600 ">{name}</h2>
    <p className="text-2xl text-purple-600 bg-slate-100 rounded-xl pr-1 ">{short_description}</p>
    <div className="card-actions justify-end">
        <p className="text-3xl text-orange-500 font-bold border bg-slate-200 ">{price}</p>
        <Link to={`/services/${id}`}>
      <button  className="btn btn-primary hover:bg-yellow-500 rounded-full">{button_text}</button>
      </Link>
    </div>
  </div>
</div>

    );
};

export default Servicescard;