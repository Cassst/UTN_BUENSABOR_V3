import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Pizza",
    desc: "(12 opciones)",
    img: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Lomos",
    desc: "(10 opciones)",
    img: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Empanadas",
    desc: "(12 opciones)",
    img: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Hamburguesas",
    desc: "(120 opciones)",
    img: "/images/home/category/img4.png",
  },
];

export const Categories = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto x1:px-24 px-4">
      <div className="text-center">
        <p className="text-red uppercase tracking-wide font-medium text-lg">
          Nuestros Favoritos
        </p>
        <h2 className="text-black text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
          Los más Elegidos
        </h2>
      </div>
      {/*Categorias*/}
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div key={i} className="shadow-lg rounded-md py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
            <div className="flex w-full mx-auto items-center justify-center">
                <img src={item.img} alt="CategoryImg" className="bg-[#c1f1c6] p-5 rounded-full w-28 h-28"/>
            </div>
            <div className="mt-5 sapce-y-1">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
