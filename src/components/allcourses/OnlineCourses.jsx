import React, { useState } from "react";
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

import { motion } from 'framer-motion';



const OnlineCourses = () => {
 
  const [hoveredIndex, setHoveredIndex] = useState(null);


   const online = [
    {
      cover: "./images/courses/online/o1.1.png",
      hoverCover: "./images/courses/online/o1.1.png",
      courseName: "ITELTS Courses",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o2.1.png",
      hoverCover: "./images/courses/online/o2.1.png",
      courseName: "PTE Courses",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o3.png",
      hoverCover: "./images/courses/online/o3.png",
      courseName: "CMAT Course",
      course: "ENROLL NOW",
    },
    {
      cover:  "./images/courses/online/o4.png",
      hoverCover: "./images/courses/online/o4.1.png",
      courseName: "GMAT Course",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o5.1.png",
      hoverCover: "./images/courses/online/o5.1.png",
      courseName: "IT Traning",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o6.png",
      hoverCover: "./images/courses/online/o6.1.png",
      courseName: "Bridge Course",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o7.png",
      hoverCover: "./images/courses/online/o7.1.png",
      courseName: "Enigineering Preparation",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o8.png",
      hoverCover: "./images/courses/online/o8.1.png",
      courseName: "KUUMAT Course",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o9.png",
      hoverCover: "./images/courses/online/o9.1.png",
      courseName: "Graphic Design",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o10.png",
      hoverCover: "./images/courses/online/o10.1.png",
      courseName: "Motion Design",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o11.png",
      hoverCover: "./images/courses/online/o11.1.png",
      courseName: "CSIT Entrance Course",
      course: "ENROLL NOW",
    },
    {
      cover: "./images/courses/online/o12.png",
      hoverCover: "./images/courses/online/o12.png",
      courseName: "SAT Course",
      course: "ENROLL NOW",
    },
  ]
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <motion.div
             initial={{ opacity: 0, scale: 0.4 }}
             animate={{ opacity: 1.5, scale: 1 }}
             transition={{ duration: 0.5 }}
     
          
          
          
          className='content grid3'>
            {online.map((val, index) => (
              <div 
             
              key={index}
              className='box'
              
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}

              >
                {hoveredIndex !== index && (
                  <img src={val.cover} alt="" />
                )}

                {/* Display cover image only if not hovered */}
                {hoveredIndex == index&& (
                  <>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                  </>
                )}
               
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses