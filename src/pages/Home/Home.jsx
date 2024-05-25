import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "./Footer/Footer";
import Servicescard from "./Servicescard";


const Home = () => {

    const services=useLoaderData();
console.log(services);
      
    return (

        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
            <Banner></Banner>
            </div>
        
         
          <div className=" grid md:grid-cols-1 lg:grid-cols-3  space-x-3 space-y-3">
            
             {
              services?.map(service=> <Servicescard key={service.id} services={service}></Servicescard>)
            }

          </div>
          <div>
          <Footer></Footer>
          </div>
         <div>
            
            </div>
        </div>
    );
};

export default Home;