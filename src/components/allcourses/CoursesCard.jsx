import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"


import { motion } from 'framer-motion';



const CoursesCard = () => {
  return (
    <>
      <section
       className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <motion.div 
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            
            
             className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  {/* <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div    className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div> */}
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <motion.button 
               whileHover={{
                scale: 1.1,
                backgroundColor: "#10e0f3"
              }}
              transition={{ duration: 0.7, yoyo: Infinity }}
              className='outline-btn'>ENROLL NOW !</motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard