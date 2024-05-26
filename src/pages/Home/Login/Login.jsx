import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Login = () => {

const handellogin=e=>{
    e.preventDefault()
 const email=e.target.email.value
 const password=e.target.password.value
 console.log(email,password);

}

    return (
        <div>
      <Navbar></Navbar>
        <div>
     
          <div className=" bg-base-200">
          <h1 className="text-center text-3xl font-serif font-extrabold">Login now!</h1>
  <div className="hero-content flex-col lg:flex-row-reverse">
    

    <div className="text-center lg:text-left">
     
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handellogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <p className="p-4" >Do You Have An Account! Please 
        <Link to="/register" className="underline text-green-800">  
         Resister</Link></p> 
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;