import React from "react"
import "../journel/journel.css"
import { journel } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { motion } from 'framer-motion';


const Hblog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
            {journel.slice(0, 3).map((val) => (
              <motion.div 
             
              initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1.5, scale: 1 }}
        transition={{ duration: 0.5 }}


              whileHover={{ scale: 0.91, boxShadow: "2px 8px 16px rgba(0, 0, 0, 0.1)", backgroundColor: "#7c8ce6" }}
              className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <i className='fa fa-comments'></i>
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog