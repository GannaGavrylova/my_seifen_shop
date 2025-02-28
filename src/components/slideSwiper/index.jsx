import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import { Zoom, Navigation, Pagination } from "swiper/modules";
import lavandel from "../../assets/images/lavandel.jpg";
import see from "../../assets/images/see.jpg";
import rose from "../../assets/images/rose.jpg";
import wolken from "../../assets/images/wolken.jpg";
import ukraine from "../../assets/images/ukraine.jpg";
import herz from "../../assets/images/herz.jpg";
import hruscha from "../../assets/images/hruscha.jpg";
import roseHerz from "../../assets/images/roseHerz.jpg";
import rosePink from "../../assets/images/rosePink.jpg";

function SliderSwiper() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {[
          lavandel,
          see,
          rose,
          wolken,
          ukraine,
          herz,
          hruscha,
          roseHerz,
          rosePink,
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={see} alt="See" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={rose} alt="Rose" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={herz} alt="Herz" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={wolken} alt="Wolken" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={ukraine} alt="Ukraine" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={hruscha} alt="Hruscha" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={roseHerz} alt="RoseHerz" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={rosePink} alt="RosePink" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default SliderSwiper;
