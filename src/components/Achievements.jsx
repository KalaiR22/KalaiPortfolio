import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { achievmentimage } from "../constants";
import { achievements } from "../constants";

const textVariants = {
  initialone: {
    x: -100,
    opacity: 0,
  },
  initialtwo: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


const Achievements = () => {
  return (
    <div className="px-4  sm:px-10 md:px-10 xl:px-14 2xl:px-20 flex flex-col pb-24">
      <motion.div
        className="mx-auto"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        <h1 className="text-radial-gradient title text-center pb-4">
          Achievements
        </h1>
      </motion.div>
      <motion.div
        className="para-1 pt-2 px-[1rem] sm:px-[3rem] md:px-[7rem] lg:px-[10rem] xl:px-[13rem] text-center mx-auto leading-4 sm:leading-6"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        Celebrating key successes and professional highlights and showcasing
        impactful results and accolades.
      </motion.div>
      <div className="pt-12 flex justify-center items-center">
        
        <Swiper
          spaceBetween={40}
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
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper flex justify-center items-center py-10 lg:py-32 "
        >
          {achievmentimage.map((images) => (
            <SwiperSlide
              key={images.id}
              className="flex items-center"
            >
              <img src={images.image} alt="pic" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" sm:px-4 md:px-28 flex flex-col gap-6 py-10 xl:py-20">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            variants={textVariants}
            initial="initialone"
            whileInView="animate"
          >
            <motion.div
              className="text-radial-gradient title "
              variants={textVariants}
              initial="initialone"
              whileInView="animate"
            >
              {achievement.title}
            </motion.div>
            <motion.div
              className="title-7"
              variants={textVariants}
              initial="initialone"
              whileInView="animate"
            >
              Year: {achievement.year}
            </motion.div>
            <motion.div
              className="para-7 py-6 sm:py-10  leading-6 sm:leading-7"
              variants={textVariants}
              initial="initialone"
              whileInView="animate"
            >
              {achievement.description}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
