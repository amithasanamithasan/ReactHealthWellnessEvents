

const Servicescard = ({services}) => {

    const{id,name,image,price,short_description,button_text}=services;
    return (
        <div className="card card-compact bg-base-100 shadow-xl pl-2  pr-2 m-5 md:m-2 ">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
    <div className="card-actions justify-end">
        <p className="text-3xl text-orange-500 font-bold border bg-slate-200 ">{price}</p>
      <button className="btn btn-primary">{button_text}</button>
    </div>
  </div>
</div>
    );
};

export default Servicescard;