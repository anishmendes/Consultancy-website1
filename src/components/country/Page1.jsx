import React from 'react'
import Back from "../common/back/Back"
import CountryCard from "./CountryCard"
import "./country.css"
import Faq from "./Faq"
import './page.css'; // Import CSS file


const Page1 = () => {
  return (

      <div  className="usa-page">
        <h1 className='heading1'><span className='span1'>Study In</span> USA</h1>
        <p className='para1'>"Embark on an educational journey like no other – study in the USA and pave the way to a bright future!"</p>
        <img src="/images/usa page1" alt="USA Page 1"  className='img1'/>

        <div>
            <h1 className='headingc'>Why study in  <span className='titlec'> USA </span>from Nepal?</h1>


            <p className='parac'>Studying in the USA from Nepal offers unparalleled 
            academic and personal growth opportunities, with top-ranked universities providing world-class education. Renowned for innovative teaching methods and cutting-edge research facilities, American institutions offer a vibrant campus life.
             Access to a global network of professionals enhances career prospects and fosters cultural exchange. The welcoming environment for international students, coupled with scholarship options, makes the USA an attractive destination for Nepalese
              students seeking to pursue academic aspirations and broaden horizons.</p>

        </div>

        <div>
            <h2>Key Advantages of Pursuing Higher Education in the <span className='titlec'>USA</span> for Nepali Students</h2>
            <p className='parac'>For Nepali students, selecting the USA as their study abroad destination presents a distinct opportunity to not only enhance academic knowledge but also foster personal and professional development. Here are compelling reasons why opting for the USA is a strategic choice for Nepali students seeking higher education :</p>
            <div>

            <p className='parac'><span >1)Academic Distinction:</span> The USA is home to  numerous top-tier universities renowned for their academic rigor and pioneering teaching approaches. Enrolling in a US university guarantees access to state-of-the-art knowledge and expertise, laying a strong groundwork for forthcoming achievements.</p>
             <section>
                <p className='parac'><span>2)Financial Aid and Scholarships:</span> While higher education in the USA can be expensive, many universities offer financial aid, scholarships, and assistantships to international students, including those from Nepal, to help alleviate the financial burden.</p>
             </section>

             <section>
                <p className='parac'><span>3)Global Recognition:</span> Degrees from US universities are recognized worldwide, which can enhance career prospects and open doors to opportunities in Nepal or abroad.</p>
             </section>


             <section>
              <p className='parac'><span>4)Career Opportunities:</span> Graduating from a US university can enhance employability both in Nepal and internationally, as employers often value the skills, knowledge, and cultural adaptability gained from a US education.</p>
             </section>

             <section>
                <p className='parac'><span>5)Personal Development:</span> Studying abroad requires independence, adaptability, and resilience, all of which contribute to personal growth and self-confidence. Nepali students return home with a broader worldview and valuable life experiences.</p>
             </section>

              <section>
                <p className='parac'><span>6)Cultural Exchange:</span> Living and studying in the USA exposes Nepali students to different cultures, languages, and perspectives. This cultural immersion fosters personal growth, cross-cultural understanding, and tolerance.</p>
              </section>

            </div>
        </div>

        <img src="/images/mid pic usa " alt="USA Page 2"  className='img2' />
        <div class="buttons">
    <button>About USA</button>
     <button>Universities</button>
     <button>Courses </button>
     <button>Scholarship</button>
     </div>
        
        <div>
            <h2>Top Universities for Nepalese Students in USA</h2>
            <span>
                <p>The following table presents the top 10 universities in the United States, listing each university's name, and it’s USA rank.</p>
            </span>
        </div>


            

    </div>
)
  
}

export default Page1