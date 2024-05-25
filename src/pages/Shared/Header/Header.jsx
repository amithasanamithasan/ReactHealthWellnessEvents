import moment from "moment";
import logo from"../../../assets/Capture.jpg"

const Header = () => {
    return (



    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-96 place-content-between md: bg-cyan-300 lg:bg-cyan-300 w-full">
  <div className="">
  <img className=" py-2 h-20" src={ logo}  alt="" />
  </div>
 
  
  <div className="py-2 md:1xl text-2xl text-black-400  font-serif font-extrabold ">
    <p className= " hover:bg-red-500">{moment().format("dddd, MMMM Do YYYY, h:mm:ss ")}</p>
  </div>
</div>
    );
};

export default Header;