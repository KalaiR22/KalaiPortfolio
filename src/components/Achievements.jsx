import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { achievmentimage } from "../constants";
import { achievements } from "../constants";

const Achievements = () => {
  return (
    <div className="px-4  sm:px-10 md:px-10 xl:px-14 2xl:px-20 flex flex-col pb-24">
      <div className="mx-auto">
        <h1 className="text-radial-gradient title text-center pb-4">
          Achievements
        </h1>
      </div>
      <div className="para-1 pt-2 px-[1rem] sm:px-[3rem] md:px-[7rem] lg:px-[10rem] xl:px-[13rem] text-center mx-auto leading-6">
        Celebrating key successes and professional highlights and showcasing
        impactful results and accolades.
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper py-10 lg:py-32"
        >
          {achievmentimage.map((images) => (
            <SwiperSlide key={images.id}>
              <img src={images.image} alt="pic" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" sm:px-4 md:px-28 flex flex-col gap-6 py-10">
        {achievements.map((achievement) => (
          <div key={achievement.id}>
            <div className="text-radial-gradient title ">
              {achievement.title}
            </div>
            <div className="title-7">Year: {achievement.year}</div>
            <div className="para-7 py-10 leading-7">
              {achievement.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
