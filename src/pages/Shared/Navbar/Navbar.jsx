import { Link, NavLink } from "react-router-dom";
import { MdLocalHospital } from "react-icons/md";
import { useContext } from "react";
import { Authcontext } from "../../../providers/AuthProvider";


const Navbar = () => {

  const { user , logOut }=useContext(Authcontext)
  
  const navlinks= <>
  <li className="text-1xl"><NavLink  to="/">HOME</NavLink></li>
 
 <li className="text-1xl"><NavLink to="/services">Services</NavLink></li>
  
 <li className="text-1xl"><NavLink to="/userservice">UserService</NavLink></li>

 <li className="text-1xl"> <NavLink to="/about">ABOUT</NavLink></li>
 <li className="text-1xl"> <NavLink to="/contact">Contact</NavLink></li>
 <li className="text-1xl"><NavLink to="/login">LOG IN</NavLink></li>


      
 {user && <>
  <li>
        <details>
          <summary>Survices</summary>
          <ul className="p-2">
          <li className="text-red-500"> <NavLink to="/sevices1">  Health Fairs</NavLink></li>
          <li> <NavLink to="/services2">Yoga and Fitness Retreats</NavLink></li>
          </ul>
        </details>
      </li>
   
     <li><NavLink to="/userprofile">User profile</NavLink></li>
    </> 
    }
 </>  



 const handelSignOUT=()=>{
  logOut()
  .then()
  .catch()
 }



  return (


    <div className="navbar border bg-violet-500 hover:bg-sky-700 h-2 
    pl-2  pr-4  ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2
         shadow bg-base-100 rounded-box w-52">
        {navlinks}
        </ul>
      </div>
      <a className=" text-3xl bg-gradient-to-r from-cyan-700
       via-cyan-600 to-lime-200-400 hover:bg-gradient-to-bl focus:ring-4
        focus:outline-none focus:ring-cyan-100
       dark:focus:ring-cyan-400-400 font-medium rounded md:text-sm  md:px-4 md:py-1 lg:px-8 lg:py-3 
       text-center me-2 mb-2 " data-aos="zoom-in">Health and Wellness</a>
        <MdLocalHospital className="text-4xl "></MdLocalHospital>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
     
       {navlinks}
       
      </ul>
    </div>
    <div className="navbar-end gap-1">
    <div tabIndex={0} role="button" className=" btn btn-neutral  bt btn-circle avatar ">
        <div className="w-10 rounded-full">
    {
      user? <>
      <img  src={user.photoURL} alt="" />
      </>
      :
      <img src="" alt="" />
    }
          
        </div>
      
      </div>

   <div>
   {
    user ? <>
    <span>{user.email}</span>

    <button onClick={handelSignOUT} className="btn hover:bg-red-500"> Sign_OUT</button>
    </>
    :
    <Link to="/login">
    <button className="btn btn-primary">LOG_IN</button></Link>
   
   }
   </div>
      



   
    </div>
    </div>
   
    );
};

export default Navbar;