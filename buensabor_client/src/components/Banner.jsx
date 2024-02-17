import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto x1:px-24 px-4 bg-white element">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/*imagen*/}
        <div className="md:w-1/2">
          <img src="images/home/banner/bannerImg3.webp" alt="BannerImg" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-6">
            <div className="flex py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64  bg-white">
              <img
                src="images/home/b-food1.png"
                alt="menuBanner1"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Arroz</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">$2.500</p>
              </div>
            </div>
            <div className="sm:flex hidden py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64 bg-white">
              <img
                src="images/home/b-food1.png"
                alt="menuBanner1"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Arroz</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">$2.500</p>
              </div>
            </div>
          </div>
        </div>
        {/*texto*/}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font bold md:leading-snug leading-snug text-black">
            Sumérgete en los placeres de la{" "}
            <span className="text-green">comida</span> deliciosa.
          </h2>
          <p className="text-xl text-[#a4a4a4]">
            donde cada plato crea una historia de maestría culinaria y pasión.
          </p>
          <Link to="/menu">
            <button
              className="btn bg-green px-8 py-3 font-semibold text-white rounded-full"
              style={{ border: "none" }}
            >
              Ver Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
