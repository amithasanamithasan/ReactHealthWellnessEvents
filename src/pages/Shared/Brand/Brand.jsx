import Marquee from "react-fast-marquee";
import img1 from '../../../assets/health-and-wellness-logo-free-free-vector.jpg'
import img2 from '../../../assets/images.jpeg'
 import img3 from '../../../assets/images (1).jpeg'
 import img4 from '../../../assets/floower.jpg'
 import img5 from '../../../assets/Capture 5.jpg'
 import img6 from '../../../assets/Capture2.jpg'

const Brand = () => {
    return (
     
        <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="900">
        <Marquee Direction:right speed={70}>
         <img className=" h-25 w-40" src={img1} alt=""/>
         <img src={img2} alt=""/>
         <img  src={img3}  alt=""/>
         <img className="  h-30 w-40" src={img4}  alt=""/>
         <img className=" h-30 w-30" src={img5}  alt=""/>
         <img className="  h-30 w-40" src={img6}  alt=""/>
      
        </Marquee>
        </div>
     
    );
};

export default Brand;