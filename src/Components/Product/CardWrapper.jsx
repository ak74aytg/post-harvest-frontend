import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Card from "./Card"

const list = [
  {
    name: "Grain Storage Solutions",
    content:
      "Offer various types of grain storage solutions such as silos, bins, and warehouses designed to maintain grain quality and minimize losses due to spoilage, pests, and environmental factors.",
    image:
      "https://dam.buhlergroup.com/rendition/2fe2fd98b1e342dfb0b95fda1328f463/-FJPG-TwebHeader_1x1-S1024x1024",
  },
  {
    name: "Moisture Measurement Equipment",
    content:
      "Provide moisture meters and sensors for accurately measuring the moisture content of grains, which is crucial for determining proper drying and storage conditions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3PVvqMwJ2FTf8-_-1TJx_qyHjH5jASKlImY2tpTsZQ&s",
  },
  {
    name: "Quality Testing Tools",
    content:
      "Offer testing equipment and kits for assessing grain quality parameters such as protein content, grain size, purity, and mycotoxin levels.",
    image:
      "https://www.acte.in/wp-content/uploads/2021/12/Software-Quality-Assurance-Tools-ACTE.png",
  },
  {
    name: "Grain Handling Equipment",
    content:
      "Include equipment such as conveyors, elevators, and augers for efficient and safe handling of grains during postharvest operations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8-N0ZDIwOSZlXO4KkMoNJGzfmrE7Opksqqid3v90Mg&s",
  },
  {
    name: "Pest Control Solutions",
    content:
      "Provide products and services for pest management in grain storage facilities, including insect traps, fumigation products, and integrated pest management (IPM) solutions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJHu__ikeM9h-SsvdBzmqfYjOzOL2Ukcs5ntnClro8Q&s",
  },
  {
    name: "Drying Systems",
    content:
      "Offer grain drying systems and equipment such as batch dryers, continuous flow dryers, and natural air drying systems to remove excess moisture from harvested grains.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdH2MyYd9-htAbtShO2JGXK7hjhT4tru3NX2A8kjtw5w&s",
  },
];

export default function CardWrapper() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      startAt: 0,
      focusAt: "center",
      perView: getPerView(window.innerWidth),
      autoplay: 3000,
      animationDuration: 700,
      gap: getGap(window.innerWidth),
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    const resizeHandler = () => {
      slider.update({ perView: getPerView(window.innerWidth), gap: getGap(window.innerWidth) });
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      slider.destroy();
       window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const getPerView = (width) => {
    return width < 600 ? 1 : 4;
  };
  const getGap = (width) => {
    return width < 600 ? 120 : 70;
  };

  return (
    <>
      {/*<!-- Component: Slider with controls inside --> */}
      <div className="relative w-full glide-01">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {
              list.map((item) => {
                return (
                  <Card name={item.name} content={item.content} image={item.image} />
                )
              })
            }
            
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with controls inside --> */}
    </>
  );
}
