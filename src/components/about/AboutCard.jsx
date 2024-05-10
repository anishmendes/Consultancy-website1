import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
//motion
import {motion} from 'framer-motion';
import { Link } from "react-router-dom"

//varients





const AboutCard = () => {
  const routeTo = () => {
    window.scrollTo({
      top:0,
  
    })
  }
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

              {/* About us section mapping elements  */}

              {homeAbout.map((val) => {
                return (
                  <motion.div 
                  key={val.id} // Add a key prop to each element in the map function
                  whileHover={{ scale: 0.9 }}
                  className='item flexSB'>
                    <Link onClick={routeTo} to={val.link} className='linkabout'>
                      
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div 
                    className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                   </Link>
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