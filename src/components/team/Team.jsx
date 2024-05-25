import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import { motion } from "framer-motion"

const Team = () => {
  return (
    <>
     <div className="teamheading">
      <motion.h1   initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}>OUR TEAM</motion.h1>
     </div>
      <section className='team padding'>

        <div className='container grid'>
          <TeamCard />
          
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team