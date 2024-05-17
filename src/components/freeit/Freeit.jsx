import "./freeit.css"
import React from 'react'
import Num from "./Num"

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
              <div className="box-2">
                <img src="./images/train2.png" alt="train1"  className="train1"/>
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
              {/* <div className="box-3">
              <img src="./images/train3.png" alt="train1"  className="train3"/>
              
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

              </div> */}
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="mid-num">
            <Num/>
           
          </div>

          <div>
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
          <div className='students'>
         <div className='news'>
          <h2>Latest News</h2>
         </div>
   
        <div className='reviewbox'>
          <div className='box1'>
           <h3 className="boxh3">How to choose proper course according to your choice?</h3>
           
            <span className="boxspan">Read More</span>
         
          </div>
          <div className='box2'>
          <h3 className="boxh3">How to choose proper course according to your choice?</h3>
           
            <span className="boxspan">Read More</span>
           
          </div>
        </div>

       </div>

          <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1 className="headingwhite">Want to get free trainings and course update?</h1>
            {/* <span>Nepal Best Visa Services & Education.</span> */}
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
          </div>
    </div>
  )
}

export default Freeit
