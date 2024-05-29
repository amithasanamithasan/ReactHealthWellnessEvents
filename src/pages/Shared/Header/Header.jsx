import moment from "moment";
import logo from"../../../assets/Logo.png"

const Header = () => {
    return (



    <div className="grid grid-cols-1 lg:grid-cols-2
     gap-x-96 place-content-between md: bg-cyan-300 lg:bg-cyan-300 w-full">
  <div className="">
  <img className=" py-2 h-25 w-20 "  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={ logo}  alt="" />
  </div>
 
  
  <div className="py-2 md:1xl text-2xl text-black-400  font-serif font-extrabold ">
    <p className= " hover:bg-red-500" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{moment().format("dddd, MMMM Do YYYY, h:mm:ss ")}</p>
  </div>
</div>
    );
};

export default Header;