import React, { useRef, useState } from "react"
import { question } from "../../dummydata"
// import Heading from "../common/heading/Heading"
import { motion } from 'framer-motion';







const Question = () => {
  const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
      {/* <Heading subtitle='FAQS' title='Frequesntly Ask Question' /> */}
      <section className='faq'>
        <div className='container'>
          {question.map((val, index) => (
            <div 
           
            
            
            className='box'>
              <motion.button 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 1.1 }}
               drag="x"
               dragConstraints={{ left: -100, right: 150 }}
              
              
              className='accordion' onClick={() => toggle(index)} key={index}>
                <h2>{val.title}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </motion.button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Question