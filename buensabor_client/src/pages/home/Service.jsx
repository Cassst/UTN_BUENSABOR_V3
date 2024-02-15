import React from "react";

const servicesList = [
  {id: 1, title:"Catering", desc: "Deleita a tus invitados con nuestros sabores y presentación", img:"/images/home/services/icon1.png"},
  {id: 2, title:"Delivery", desc: "Llevamos su pedido directamente a su puerta", img:"/images/home/services/icon2.png"},
  {id: 3, title:"Pedidos En Linea", desc: "Explore el menú y ordene con facilidad", img:"/images/home/services/icon3.png"},
  {id: 4, title:"Gift Cards", desc: "Regala una cena excepcional con nuestras tarjetas de regalo", img:"/images/home/services/icon4.png"},
]

const Service = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto x1:px-24 px-4 my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/*Texto*/}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="text-red uppercase tracking-wide font-medium text-lg">
              Servicios
            </p>
            <h2 className="text-black text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
              Nuestros Servicios
            </h2>
            <p className="my-5 text-secondary leading-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              voluptatum quasi ut, modi voluptate rem recusandae officia nobis
              aliquid sapiente, atque laudantium odio dolores id harum eius
              consectetur. In, assumenda.
            </p>
            <button className="btn bg-green text-white px-8 py-3 rounded-full" style={{ border: "none" }}>Explorar</button>
          </div>
        </div>
        {/*Imagen*/}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {
              servicesList.map((service) => (
                <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border">
                  <img src={service.img} alt="" className="mx-auto"/>
                  <h5 className="pt-3 font-semibold">{service.title}</h5>
                  <p className="text-[#90bd95]">{service.desc}</p>
                </div> 
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
