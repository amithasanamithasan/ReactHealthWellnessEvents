import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";



const Register = () => {

  const handelregister=e=>{
    e.preventDefault()
  
    const Name=e.target.name.value
    const Email =e.target.email.value 
    const Password=e.target.password.value

console.log(Name,Email,Password);

  }



    return (
      

        <div>
             <div>
        <Header></Header>
        </div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register_Now!</h1>
      <p className="py-6">Please fill up input field.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelregister}   className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
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

          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Sing_Up</button>
        </div>
      </form>
   
      <p className="p-2 text-center " >Please Form Fillup &! 
      <Link to="/login" className="underline text-green-800">  
      LOG_IN</Link></p> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;