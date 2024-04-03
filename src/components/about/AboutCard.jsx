import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
//motion
import {motion} from 'framer-motion';

//varients





const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        
        className='container flexSB'>
          <div className='left row'>
            <img src='./about.png' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <motion.div 
                  
                  whileHover={{ scale: 1.1 }}
                  className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div 
                    
                   
                    
                    className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard