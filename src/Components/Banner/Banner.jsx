import React from "react";
import { imageList } from "./images";
import img7 from "../../Assests/img7.jpg";

function Banner() {
  return (
    <div className="relative mt-83">
      <div className="banner w-full md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 px-4">
        <div className="flex flex-wrap items-end justify-between">
          <div className="md:w-1/2 w-2/3 md:leading-loose">
            <h1 className="text-sky-950 text-3xl md:text-5xl roboto-regular mb-3">
              Wesley Grain Quality
            </h1>
            <p className="roboto-regular text-black">
              Efficiently manage grain quality with our advanced tools. good
              yields, excellent straw strength with tolerance to stripe rust,
              wesley was released for its superior breadmaking quality.
            </p>
          </div>
          <div>
            <img className="banner-img-lg" src={img7} alt="" />
          </div>
        </div>

        <div className="banner-img-div flex-wrap text-black roboto-regular flex mt-5 md:mt-14 justify-evenly">
          {imageList.map((img) => {
            return (
              <div className="flex flex-col items-center">
                <img className="banner-img" src={img.image} alt="" />
                <p>{img.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Banner;
