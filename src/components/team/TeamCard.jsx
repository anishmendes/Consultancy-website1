import React from "react"
import { team } from "../../dummydata"

import { motion } from 'framer-motion';


const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <motion.div 
        
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1.5, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        
        whileHover={{ scale: 0.9, boxShadow: "1px 4px 8px rgba(0, 0, 0, 0.1)" }}
        
        whileTap={{ scale: 1.1}}
        
        className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default TeamCard