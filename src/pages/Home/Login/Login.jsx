import toast, { Toaster } from 'react-hot-toast';
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { Authcontext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase/firebase.config';
import { FaGoogle } from "react-icons/fa";

const Login = () => {


const {loginuser ,gooogleauth}=useContext(Authcontext)


const[success, setSuccess]=useState('');
const[errormessage,setErrormessage]= useState('');

const navigate=useNavigate()


const handellogin=e=>{
    e.preventDefault()
 const email=e.target.email.value
 const password=e.target.password.value
 console.log(email,password);


 setErrormessage('');
 if (password.length < 6) {
  toast.error('Password should be at least 6 characters');
  setErrormessage('Password should be at least 6 characters')
  return;
}
else if (!/\S+@\S+\.\S+/.test(email)) {
  toast.error('Invalid email format eamil doesnot match');
  setErrormessage('Invalid email format');
  return;
}

 loginuser(email,password)
 .then(result=>{
   console.log(result.user)
    toast.success('User logged in successfully');
   setSuccess('User logged in successfully');
   navigate(location?.state? location.state:'/');
 })
 .catch(error=>{
  console.log(error)
  toast.error('Email doesnot match');
  setErrormessage('Login failed. Please check your credentials and try again.');

 })

}


const googlepoup=()=>{
  gooogleauth(auth)
  .then(res=>console.log(res))
    .catch(error=>console.log(error))
    navigate(location?.state? location.state:'/');
}


    return (
        <div>
      <Navbar></Navbar>
        <div>
     
        <div className="hero  min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card  shrink-0 w-full  max-w-sm shadow-5xl bg-slate-500" data-aos="fade-left">
            <form onSubmit={handellogin} className="card-body">
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text text-2xl ">Email</span>
                </label>
                <input type="email" 
                name="email" 
                placeholder="Email" 
                className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label ">
                  <a   className="label-text-alt link link-hover text-2xl">Forgot password?</a>
                </label>
              </div>

              <div className="form-control mt-4 mr-4 gap-4">
                
                <button  className="btn btn-primary hover:bg-green-500 ">Login</button>



               <div className=" border  mr-0   p-1  m-1 border-cyan-400 rounded-full   ">
               <button onClick={googlepoup} className="py-1 ">
          <p className="text-2xl flex  "> <FaGoogle className="mr-1 text-3xl"></FaGoogle> Login_with_Google </p>
          </button> 
               </div>
                <Toaster />
              </div>
             <div>
            
             </div>
            </form>
            <div>
      
            </div>
         
            {
    success&& <p className="text-2xl text-green-600"> User LOG_IN succesFully</p>
            }
            {
    errormessage && <p className= "right-3 py-3 font-serif text-center text-red-600">{errormessage} </p>
}

        <p className="p-4 text-2xl font-serif font-semibold text-center " >Do You Have An Account! Please  <br />
        <Link to="/register" className="underline  text-green-800 hover:text-yellow-500 font-serif font-semibold">  
         Resister</Link></p> 

          </div>
        </div>
      </div>
      </div>
      </div>
    );
};

export default Login;