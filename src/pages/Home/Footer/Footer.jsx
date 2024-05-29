import img1 from'../../../assets/Logo.png'

const Footer = () => {
    return (
      <div>
        <footer className="footer mt-16 p-10 bg-emerald-300 text-base-content ">
  <aside>
  <img  className=" hover:bg-fuchsia-700 rounded-lg  h-30 w-40"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={img1} alt="" />

     
    <p className='tex-3xl text-fuchsia-700'>HealthWellnessEvents  Ltd.<br/>Providing reliable tech since 2000</p>
  </aside> 
  <nav>
    <h6 className="footer-title text-1xl text-black"data-aos="fade-right">Services</h6> 
    <a className="link link-hover text-1xl text-black"data-aos="fade-right">Branding</a>
    <a className="link link-hover text-1xl text-black"data-aos="fade-right">Design</a>
    <a className="link link-hover text-1xl text-black"data-aos="fade-right">Marketing</a>
    <a className="link link-hover text-1xl text-black"data-aos="fade-right">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-1xl text-black " data-aos="fade-left">Company</h6> 
    <a className="link link-hover text-1xl text-black"data-aos="fade-left">About us</a>
    <a className="link link-hover text-1xl text-black"data-aos="fade-left">Contact</a>
    <a className="link link-hover text-1xl text-black"data-aos="fade-left">Jobs</a>
    <a className="link link-hover text-1xl text-black"data-aos="fade-left">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-1xl text-black"data-aos="fade-down-left">Legal</h6> 
    <a className="link link-hover text-1xl text-black"data-aos="fade-down-left">Terms of use</a>
    <a className="link link-hover text-1xl text-black"data-aos="fade-down-left">Privacy policy</a>
    <a className="link link-hover text-1xl text-black"data-aos="fade-down-left">Cookie policy</a>
  </nav>
</footer>
      </div>
    );
};

export default Footer;