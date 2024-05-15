import './onlinecourse.css'

import React from 'react'

const Onlinecourse = () => {
  return (
    <div className='onlinec'>
     
       <div className='onlineimg'>
       <img src="/onlinecourse.png" alt="onlineimg1"   className='onlineimg1'/>

         <div className='onlinein'> 
         
         
          <h1 className='onlineh1'>  Learn Anywhere, Anytime, at Your Own Pace.</h1>
       
          <h2 className='onlineh2'>  Discover the freedom of learning on your own terms with our diverse range of online courses</h2>
          <button className='onlineb'>Find a course</button>
         
         </div>
       </div>

      <div className='popular'>
        <h1 className='headingpopu'>OUR  POPULAR COURSES</h1>
        <div className='leftsidep'>
            <h3 className='h3p'>All categories</h3>
            <div className='leftbox'>
              <ul className='ulleft' >
                <li className='lileft'>CMAT</li>
                <li className='lileft'>KUMAT</li>
                <li className='lileft'>Bsc.CSIT</li>
                <li className='lileft'>PTE</li>
                <li className='lileft'>GMAT</li>
                <li className='lileft'>Bridge  Course</li>
                <li className='lileft'>SAT</li>
                <li className='lileft'>Graphics design</li>
              </ul>
            </div>

        </div>
        <div className='rightsidep'>
          <div className='boxp'>
          <img src="/images/popular1.png" alt="pop"   className='pop1img'/>
          <h2>CMAT</h2>
          <p>CMAT: Streamlining Talent Acquisition through Comprehensive Management Assessment Tools.</p>

          </div>
          <div className='boxp'>
          <img src="/images/popular1.png" alt="pop"   className='pop1img'/>
          <h2>CMAT</h2>
          <p>CMAT: Streamlining Talent Acquisition through Comprehensive Management Assessment Tools.</p>

          </div>
          <div className='boxp'>
          <img src="/images/popular1.png" alt="pop"   className='pop1img'/>
          <h2>CMAT</h2>
          <p>CMAT: Streamlining Talent Acquisition through Comprehensive Management Assessment Tools.</p>

          </div>
        </div>
        <button className='onlineb'>See More</button>
      </div>

    </div>
   
    

  )
}

export default Onlinecourse