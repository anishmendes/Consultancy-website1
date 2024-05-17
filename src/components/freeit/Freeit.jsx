import "./freeit.css"
import React from 'react'

const Freeit = () => {
  return (
    <div className="freeit">
       <div className='itimg'>
       <img src="./images/itfree.jpg" alt="itimg1"   className='itimg1'/>
       </div>
       <div className='itin'> 
         
         
          <h1 className='ith1'> Empower Your Future: Free IT Training for All!</h1>
       
          <h2 className='ith2'>  Unlock your potential with our free IT training program! Gain valuable skills in coding, cybersecurity, networking, and more, all at no cost.</h2>
          </div>

          <div className="tranings">
            <div className="trainheading">

            <h3>FREE  <span className="spanblue"> TRANINGS</span></h3>
            <p>Whether you're a beginner or an experienced professional, our comprehensive courses provide the tools and knowledge you need to thrive in the digital world.</p>
            </div>
            <div className="train-box">
              <div className="box-1">
              <img src="./images/train1.png" alt="train1"  className="train1"/>
              {/* rating  */}
              <div className='rating'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                  
                  </div>
              <h3>Web development training</h3>
              <span>Credit : 7 hours</span>
              <p>Transform your passion into proficiency with our comprehensive web development training.</p>
              <button>Free</button>

              </div>
              <div className="box-2"><img src="./images/train2.png" alt="train1"  className="train1"/>
              {/* rating  */}
              <div className='rating'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                  
                  </div>
              <h3>UI/UX design training</h3>
              <span>Credit : 6 hours</span>
              <p>Craft compelling user experiences with our immersive UI/UX design training.</p>
              <button>Free</button></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
    </div>
  )
}

export default Freeit
