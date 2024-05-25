import React from "react"
import Back from "../common/back/Back"
import JournelCard from "./JournelCard"
import "./journel.css"

import { motion } from 'framer-motion';
import { fadeIn } from './../../variants';



const Journel = () => {
  return (
    <>
    <div className="journelheading">
      <motion.h1  variants={fadeIn("up", 0.7)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}>CHECK OUR JOURNELS</motion.h1>
      </div>
      {/* <Back title='Blog Posts' /> */}
      
      <section className='blog padding'>
        <motion.div
         
        className='container grid2'>
          <JournelCard />
        </motion.div>
      </section>
    </>
  )
}

export default Journel