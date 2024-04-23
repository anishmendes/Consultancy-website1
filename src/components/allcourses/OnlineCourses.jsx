import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";


const OnlineCourses = () => {
  return (
    <section className="online">
      <div className="container">
        <Heading subtitle="COURSES" title="Browse Our Online Courses" />
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          
        >
          {online.map((val, index) => (
            <SwiperSlide key={index}>
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OnlineCourses;