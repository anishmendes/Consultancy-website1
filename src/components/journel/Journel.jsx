import React from "react"
import Back from "../common/back/Back"
import JournelCard from "./JournelCard"
import "./journel.css"

import { motion } from 'framer-motion';



const Journel = () => {
  return (
    <>
    <div className="journelheading">
      <h1>CHECK OUR JOURNELS</h1>
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