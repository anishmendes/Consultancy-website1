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
              <ul>
                <li>CMAT</li>
                <li>KUMAT</li>
                <li>Bsc.CSIT</li>
                <li>PTE</li>
                <li>GMAT</li>
                <li>Bridge  Course</li>
                <li>SAT</li>
                <li>Graphics design</li>
              </ul>
            </div>

        </div>
      </div>

    </div>
   
    

  )
}

export default Onlinecourse