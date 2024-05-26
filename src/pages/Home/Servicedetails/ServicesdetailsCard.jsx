import Footer from "../Footer/Footer";


const ServicesdetailsCard = ({service}) => {

    const{id,name,image,price,short_description,button_text}=service;
    return (
        <div>
                    <div className="card md:card-side lg:card-side mr-4 bg-stone-800  rounded-lg shadow-xl  top-3">
  <figure ><img  className="h-72 ml-5 rounded-lg " src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title bg-red-200  rounded-lg ">{name}</h2>
    <p className="bg-red-200 text-2xl rounded-lg" >{short_description}.</p>
    <div className="card-actions justify-end">
    <p className="text-3xl text-fuchsia-700 font-bold border-spacing-3  ">{price}</p>
      <button className="btn btn-primary">Book-Now</button>
    </div>
  </div>
</div>
<div>
    <Footer></Footer>
</div>
        </div>
    );
};

export default ServicesdetailsCard;