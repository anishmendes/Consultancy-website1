import React from "react"
import { price } from "../../dummydata"

import { motion } from 'framer-motion';
const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <motion.div 
        whileHover={{
          scale: 1.1,
          backgroundColor: "#5177e8"
        }}
        transition={{ duration: 0.8, yoyo: Infinity }}
        className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <motion.button 
           whileHover={{
            scale: 1.1,
            backgroundColor: "#e53c2c"
          }}
          
          className='outline-btn'>GET STARTED</motion.button>
        </motion.div>
      ))}
    </>
  )
}

export default PriceCard