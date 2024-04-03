import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

import { motion } from 'framer-motion';




const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <motion.div 
         
         initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        
        
        className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <motion.div 

              whileHover={{ scale: 1.1 }}
              
              className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Testimonal