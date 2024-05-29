import { Link,  useNavigate} from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { useContext, useState } from "react";
import { Authcontext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";







const Register = () => {

const{createuser }=useContext(Authcontext)

const[success, setSuccess]=useState();
const navigate =useNavigate();


  const handelregister=e=>{
    e.preventDefault()
  
   const name =e.target.name.value
    const email =e.target.email.value 
    const password=e.target.password.value

console.log(name,email,password);

createuser(email,password)
.then(result=>{
  
  console.log(result.user);
  // alert('ueser register susccessfully')
  toast.success('USER CREATED SUCCESSFULLY!')
  setSuccess('USER CREATED SUCCESSFULLY');
navigate('/login')

})
.catch(error=>{
  console.log(error);
})
  }




    return (
      

        <div>
             <div>
        <Header></Header>
        </div>
            
            <div className="hero min-h-screen " data-aos="flip-right">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Register_Now!</h1>
      <p className="py-6 text-2xl text-black">Please Fill Up The Form.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-zinc-950">
      <form onSubmit={handelregister}   className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl text-white">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl text-white">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl text-white">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">

          </label>
        </div>
        <div className="form-control mt-2">
  <button    className="btn btn-primary">Sing_Up </button>
        
        </div>


     
      </form>
      {
              success&& <p className="text-2xl text-center text-green-600"> User Register SuccesFully</p>
            }
   
      <p className="p-2 text-center  text-2xl font-semibold text-cyan-700" >Please Form Fillup &! 
      <Link to="/login" className="underline text-green-800 hover:text-orange-500">  
      LOG_IN</Link></p> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;