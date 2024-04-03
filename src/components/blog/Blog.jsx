import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"

import { motion } from 'framer-motion';



const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <motion.div
         
        
        className='container grid2'>
          <BlogCard />
        </motion.div>
      </section>
    </>
  )
}

export default Blog