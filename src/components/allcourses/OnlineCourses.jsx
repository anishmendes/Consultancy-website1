import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

import { motion } from 'framer-motion';



const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div 
         
        
        className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <motion.div 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#5177e8"
              }}
              className='box'>
                {/* yo tala ko img chai ek side full garni arko side chai buttona and   */}
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses