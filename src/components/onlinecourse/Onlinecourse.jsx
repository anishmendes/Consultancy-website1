import './onlinecourse.css'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import Question from './Question';

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
        {/* <div className='rightsidep'>
          <div className='boxp'>
          <img src="/images/popular1.png" alt="pop"   className='pop1img'/>
          <h2>CMAT</h2>
          <p>CMAT: Streamlining Talent Acquisition through Comprehensive Management Assessment Tools.</p>

          </div>
          <div className='boxp'>
         

          </div>
          <div className='boxp'>
          

          </div>
        </div> */}
        {/* <button className='onlineb'>See More</button> */}
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
         <div className='lecturecol'>
          <h2>Our Lectures</h2>
          <p>Our lectures offer a dynamic platform for engaging with cutting-edge ideas and insights.</p>
         </div>

         {/* swiper component out here  */}
         <Swiper
            modules={[ Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            
            
            navigation={true}
         >

<SwiperSlide>
         <div className='swiper1'>
           <div className='leftsides'>
            <img src="./images/lecture1.png" alt="lecture1" />
           </div>
           <div className='rightsides'> 
           <h3>Senior Web developer</h3>
           <span>Shreya Dhakal</span>
           <p>Shreya Dhakal is a highly skilled senior web developer with a passion for crafting elegant and efficient web solutions. With extensive experience in both front-end and back-end development, Shreya excels in turning complex concepts into user-friendly interfaces. Their expertise in HTML, CSS, JavaScript, and various frameworks enables them to create dynamic and visually stunning websites. Known for their strong problem-solving abilities and collaborative approach, Shreya is a valuable asset to any development team, driving projects to success with precision and innovation.</p>
           </div>
         </div>
        
         </SwiperSlide>
         </Swiper>
      </div>

       <div className='students'>
         <div className='studentsheading'>
          <h3> Read our students reviews</h3>
         </div>
   
        <div className='reviewbox'>
          <div className='box1'>
            <p>“I never thought an online course could be so engaging and impactful! The content was well-structured, the instructors were knowledgeable, and the interactive elements kept me hooked throughout</p>
            <img src="./images/review1.png" alt="images" className='review1' />
            <span>Pragati Dahal (Developer)</span>
         
          </div>
          <div className='box2'>
            <p>“I never thought an online course could be so engaging and impactful! The content was well-structured, the instructors were knowledgeable, and the interactive elements kept me hooked throughout</p>
            <img src="./images/review1.png" alt="images" className='review1' />
            <span>Himanshi Gairee  (UI UX Designer)</span>
           
          </div>
        </div>

       </div>

       <div className='answer'>
          <div className='anstop'>
            <h2>Meet answer your questions</h2>
            <h3>Explore the most frequently asked question</h3>
          </div>
          {/* faq section */}
          <Question/>
        </div>



    </div>
   
    

  )
}

export default Onlinecourse