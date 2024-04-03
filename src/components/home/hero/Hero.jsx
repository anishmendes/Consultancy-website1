import React from "react"
// import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from 'react-router-dom';




const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            {/* <Heading subtitle='' title='' /> */}
            {/* <p>We Provide You The Best Visa Services and Education.</p> */}
            <div className='button'>

            <Link to="/contact">
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
               </Link>
              <button>
                VIEW CLASSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero