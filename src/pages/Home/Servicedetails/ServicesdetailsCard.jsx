
import { useContext } from "react";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
import { Authcontext } from "../../../providers/AuthProvider";

import { FaFacebook } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import swal from "sweetalert";




const ServicesdetailsCard = ({service}) => {

 const {user}=useContext(Authcontext)
 console.log(user)

  

 


 

    const{id,name,image,price,short_description,button_text}=service;

    const handeladdservice=()=>{
      console.log('ami aci tumi nie');

      const addfavoriteitmsarry=[];

      const favoriteItems =JSON.parse(localStorage.getItem('favorites'))
      if(!favoriteItems){
        addfavoriteitmsarry.push(service)
        localStorage.setItem('favorites',JSON.stringify(addfavoriteitmsarry))
        swal("Good job!", "Health and Wellness Events service !", "success");
      }
      else{
     const isExits = favoriteItems.find(services=> services.id == id)
     console.log(isExits);
      if(!isExits){
        addfavoriteitmsarry.push( ...favoriteItems,service)
        localStorage.setItem('favorites',JSON.stringify(addfavoriteitmsarry))
        swal("Good job!", "Health and Wellness Events service !", "success");
      }
      else{
        swal("ERROR!", "sevice already added !", "error");
      }

        
       
      }
    }



    return (
        <div>
     <div className="card  md:card-side lg:card-side mr-4 bg-stone-800  rounded-lg shadow-xl  top-3">
  <figure ><img  className="h-72 ml-5 rounded-lg " src={image} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title bg-red-200  rounded-lg  " >{name}</h2>
    <p className="bg-red-200 text-2xl rounded-lg" >{short_description}.</p>
    <div className="card-actions justify-end">
    <p className="text-3xl text-fuchsia-700 font-bold border-spacing-3  ">{price}</p>
   
  
   
   <button  onClick={handeladdservice} className="btn btn-primary" data-aos="zoom-in-up">
              Book-Now</button>
  
  
   
  
      
    
    </div>
  </div>
</div>
<div>

<div>
  
</div>


    
</div>
{/* trinner */}
<Marquee pauseOnHover speed={70} >
<div className="grid grid-cols-4 gap-4 m-2" data-aos="zoom-in-down">
<div className="card w-80 bg-slate-500 shadow-xl top-9 ">
  <div className="card-body">
  <div className="w-20  ">
    
          <img  className="rounded-full  flex " alt="Tailwind CSS Navbar component"
           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
           <h1 className="text-3xl text-fuchsia-100">Trainer</h1>
        </div>
    <h2 className="card-title">{name}</h2>
    <p className="bg-rose-100  rounded-lg "> one whose occupation is to guide or instruct people in fitness 
      and exercise routines. a personal trainer. When we run the track, Stan 
      Ward, a boxing and conditioning trainer, times us.</p>
    <div className="card-actions justify-center gap-4">
<FaFacebook className="text-3xl hover:bg-blue-800 rounded-badge"/>
<RxTwitterLogo className="text-3xl  hover:bg-blue-800 rounded-badge"/>
<FaInstagram className="text-3xl hover:bg-amber-600 rounded-badge" />
<FaYoutubeSquare className="text-3xl hover:bg-red-800 rounded-badge"  />
    </div>
  </div>
</div>

<div className="card w-80 bg-red-500 shadow-xl top-9">
  <div className="card-body">
  <div className="w-20 rounded-full">
          <img  className="rounded-full  " alt="Tailwind CSS Navbar component" 
       src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        <h1 className="text-3xl text-fuchsia-100">Trainer</h1>
        </div>
    <h2 className="card-title">{name}</h2>
    <p className="bg-rose-100  rounded-lg"> one whose occupation is to guide or instruct people in fitness and 
      exercise routines. a personal trainer. When we run the track, Stan Ward,
       a boxing and conditioning trainer, times us.</p>
    <div className="card-actions justify-center gap-4">
    <FaFacebook className="text-3xl hover:bg-blue-800 rounded-badge"/>
<RxTwitterLogo className="text-3xl  hover:bg-blue-800 rounded-badge"/>
<FaInstagram className="text-3xl hover:bg-amber-600 rounded-badge" />
<FaYoutubeSquare className="text-3xl hover:bg-red-800 rounded-badge"  />
    </div>
  </div>
</div>
<div className="card w-80 bg-amber-400 shadow-xl top-9">
  <div className="card-body">
  <div className="w-20 rounded-full">
          <img  className="rounded-full  " alt="Tailwind CSS Navbar component" 
       src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        <h1 className="text-3xl text-fuchsia-100">Trainer</h1>
        </div>
    <h2 className="card-title">{name}</h2>
    <p className="bg-rose-100  rounded-lg "> one whose occupation is to guide or instruct people in fitness and exercise routines.
      a personal trainer. When we run 
      the track, Stan Ward, a boxing and conditioning trainer, times us.</p>
    <div className="card-actions justify-center gap-4">
    <FaFacebook className="text-3xl hover:bg-blue-800 rounded-badge"/>
<RxTwitterLogo className="text-3xl  hover:bg-blue-800 rounded-badge"/>
<FaInstagram className="text-3xl hover:bg-amber-600 rounded-badge" />
<FaYoutubeSquare className="text-3xl hover:bg-red-800 rounded-badge"  />
   
    </div>
  </div>
</div>
<div className="card w-80 bg-emerald-500  gap-4 shadow-xl top-9">
  <div className="card-body">
  <div className="w-20 rounded-full">
          <img  className="rounded-full  " alt="Tailwind CSS Navbar component" 
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
           <h1 className="text-3xl text-fuchsia-100">Trainer</h1>
        </div>
    <h2 className="card-title">{name}</h2>
    <p className="bg-rose-100  rounded-lg"> one whose occupation is to guide or instruct people in fitness and exercise routines. 
      a personal trainer. When we run the track, Stan Ward,
       a boxing and conditioning trainer, times us.</p>
    <div className="card-actions justify-center gap-4">
    <FaFacebook className="text-3xl hover:bg-blue-800 rounded-badge"/>
<RxTwitterLogo className="text-3xl  hover:bg-blue-800 rounded-badge"/>
<FaInstagram className="text-3xl hover:bg-amber-600 rounded-badge" />
<FaYoutubeSquare className="text-3xl hover:bg-red-800 rounded-badge"  />
   
    </div>
  </div>
</div>



 </div>
 </Marquee>
<Footer></Footer>
        </div>

        
    );
};

export default ServicesdetailsCard;