import React from "react"
import { awrapper } from "../../dummydata"
//motion
import {motion} from 'framer-motion';

//varients

import { fadeIn } from './../../variants';




const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        
        
        className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </motion.div>
      </section>
    </>
  )
}

export default Awrapper