import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css";

const Banner = () => {
  return (
    <Swiper
      className="relative"
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="">
        <div className="banner flex justify-center items-center text-center">
          <div className=" ">
            <h2 className="text-3xl font-bold md:text-5xl  text-[#D54215] ">
              no matter how you cook, <br /> Yumma has many the <br /> recipes
            </h2>
            <p className="font-medium md:text-[18px] text-gray-200 my-9">
              We’re all about plants and have been committed to sustainable
              organic farmers since <br /> Our entire menu is organic, gluten
              and wheat free with no refined sugars.
            </p>
            <button className="btn text-white bg-red-500 border-0">
              Explore More
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="banner flex justify-center items-center text-center">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl  text-[#D54215] ">
              no matter how you cook, <br /> Yumma has many the <br /> recipes
            </h2>
            <p className="font-medium md:text-[18px] text-gray-200 my-9">
              We’re all about plants and have been committed to sustainable
              organic farmers since <br /> Our entire menu is organic, gluten
              and wheat free with no refined sugars.
            </p>
            <button className="btn text-white bg-red-500 border-0">
              Explore More
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
