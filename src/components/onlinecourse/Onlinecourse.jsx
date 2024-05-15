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
         

          </div>
          <div className='boxp'>
          

          </div>
        </div>
        <button className='onlineb'>See More</button>
      </div>

      <div className='explorep'>
          <div className='explorep1'>
          <span className='exploreh'>Explore
Our Course</span><br></br>
         
          <p className='explorepara '> Embark on a journey of knowledge and discovery with our course offerings. From unlocking new skills to delving into fascinating subjects, our curated selection of courses provides an opportunity to explore diverse topics tailored to your interests and goals. Dive into the depths of learning and let curiosity be your guide as you embark on an enriching educational experience.</p>


         
          <button type="button" className="onlineb">
          Our Team
          </button>
          
          </div>
      
          <div className='exploreimg'>
          <img className='explore1' src='/images/explore1.png' alt="explore1" />
          </div>

          
        </div>
        <div className='data'>
          <img src="/images/dataimg.png" alt="data1"  className='dataimg' />
        <div className='datacon'>
          <h2 className='datah'>Data
        Analysis</h2>
        <p className='datap'>Check out our odds statistics and join our team yourself</p>
        <div className='numbers'>
          <div className='firstn'>
            <h2>500+</h2>
            <p>Employed course graduate</p>
          </div>
          <div className='secondn'>
          <h2>400+</h2>
            <p>
            
Certificate issued
</p>
          </div>
          <div className='thirdn'>
          <h2>20+</h2>
            <p>lecturers</p>
          </div>
        </div>
        </div>
        </div>


      
        <div className='lecture'>
         
        </div>

    </div>
   
    

  )
}

export default Onlinecourse