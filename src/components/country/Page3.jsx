import React from 'react'

import Back from "../common/back/Back"
import CountryCard from "./CountryCard"
import "./country.css"
import Faq from "./Faq"
import './page.css'; // Import CSS file

const Page3 = () => {
  return (
    <div  className="usa-page">
     <h1 className='heading1'><span className='span1'>STUDY IN</span>  AUSTRALIA</h1>
        <h3 className='para1'>"Embark on an educational journey like no other – <span className='span-red'> study in the Australia and pave the way to a bright future!"</span></h3>
        <img src="/images/aus page 1" alt="CANADA Page 1"  className='img1'/>

        <div>
            <h1 className='headingc'>Why study in  <span className='span-red'>  Australia </span>from Nepal?</h1>


            <p className='parac'>Australia has become a sought-after destination for international students, including those from Nepal, in pursuit of top-notch education within a diverse and inclusive environment. Nepalese students are increasingly attracted to Australia for higher education due to several compelling reasons, including academic excellence, a wide range of program choices, affordability, and a high quality of life. Studying in Australia from Nepal offers access to world-class education, diverse program options, affordable tuition, abundant work opportunities, a high standard of living, pathways to permanent residency, and exposure to a multicultural society, making it an appealing option for Nepalese students seeking quality education abroad.</p>

        </div>
        

        <div>
            <h2 className='h2-blue'>Key Advantages of Pursuing Higher Education in the <span className='span-red'>Australia</span> for Nepali Students</h2>
            <p className='parat'>For Nepali students, selecting the CANADA as their study abroad destination presents a distinct opportunity to not only enhance academic knowledge but also foster personal and professional development. Here are compelling reasons why opting for the CANADA is a strategic choice for Nepali students seeking higher education :</p>
            <div>
 
            <p className='parat'><span className='topic'><span className='span-red'>1)</span>High-Quality Education</span>           Canadian universities are renowned for their academic excellence and rigorous standards, offering Nepali students access to top-quality education and research opportunities..</p>
             <section>
                <p className='parat'><span className='topic'><span className='span-red'>2)</span>Diverse Program Offerings:</span>  Canada boasts a wide range of programs and courses across various disciplines, providing Nepali students with diverse academic options to pursue their interests and career goals.</p>
             </section>

             <section>
                <p className='parat'><span className='topic'><span className='span-red'>3)</span>Affordable Education:</span> Compared to other study destinations like the USA and UK, Canada offers relatively affordable tuition fees and living expenses for international students, making it financially feasible for Nepali students to pursue their education.</p>
             </section>
              

             

             <section>
              <p className='parat'><span className='topic'><span className='span-red'>4)</span>Work Opportunities:</span> Canada provides ample opportunities for international students to work part-time during their studies and gain valuable work experience through internships and co-op programs, enhancing their employability post-graduation.</p>
             </section>

             <section>
                <p className='parat'><span className='topic'><span className='span-red'>5)</span>Pathways to Permanent Residency:</span> Canada offers various immigration pathways for international students, including the Post-Graduation Work Permit Program (PGWPP) and provincial nominee programs (PNPs), providing opportunities for Nepali students to obtain permanent residency and build their careers in Canada.</p>
             </section>


          

              <section>
                <p className='parat'><span className='topic'><span className='span-red'>6)</span>Quality of Life:</span> Canada is known for its high standard of living, safety, and multicultural environment, offering Nepali students a comfortable and enriching living experience while pursuing their studies.</p>
              </section>

            </div>
        </div>

        <img src="/images/mid pic canada " alt="CANADA Page 2"  className='img2' />
        <div class="buttons">
    <button>About CANADA</button>
     <button>Universities</button>
     <button>Courses </button>
     <button>Scholarship</button>
     </div>
    <div>
        <h2>Top Universities for Nepalese Students in AUSTRALIA</h2>
        <span>
            <p>The following table presents the top 10 universities in the AUSTRALIA, listing each university's name, and it’s AUSTRALIA rank.</p>
        </span>
    </div>


        

</div>
  )
}

export default Page3
