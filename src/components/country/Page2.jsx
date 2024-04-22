import React from 'react'

import Back from "../common/back/Back"
import CountryCard from "./CountryCard"
import "./country.css"
import Faq from "./Faq"
import './page.css'; // Import CSS file

const Page2 = () => {
  const universities = [
    { id: 1. , name: 'University of Toronto', rank: 1 },
    { id: 2. , name: 'University of British Columbia', rank: 2 },
    { id: 3. , name: 'McGill University', rank: 3 },
    { id: 4. , name: 'McMaster University', rank: 4 },
    { id: 5. , name: 'University of Montreal', rank: 5 },
    { id: 6. , name: 'University of Alberta', rank: 6 },
    { id: 7. , name: 'University of Ottawa', rank: 7 },
    { id: 8., name: 'Queens University', rank: 9 },
    
];

const courses = [
  {name:'Computer Science', des:'Focuses on programming and technology.'},
  {name:'Business Administration', des:'Involves management and entrepreneurship.'},
  {name:'Engineering', des:'Includes mechanical, electrical, and computer engineering.'},
  {name:'Data Science', des:'Deals with analyzing complex data sets.'},
  {name:'Bioscience, Medicine and Healthcare',des:'Encompasses pre-med, nursing, and healthcare management.'},
  {name:'Environmental Science',des:'Concentrates on sustainable development and climate studies.'},
  {name:'Hospitality Management',des:'Covers hotel management and tourism.'},
  {name:'Finance',des:'Involves banking and financial management.'},
  {name:'Psychology',des:'Explores behavioral sciences and counseling.'},
  {name:'Marketing',des:'Focuses on advertising and brand management.'},
 ]




  return (
    <div  className="usa-page">
        <h1 className='heading1'><span className='span1'>Study In</span> CANADA</h1>
        <h3 className='para1'>"Embark on an educational journey like no other – <span className='span-red'> study in the CANADA and pave the way to a bright future!"</span></h3>
        <img src="/images/canada page 1" alt="CANADA Page 1"  className='img1'/>

        <div>
            <h1 className='headingc'>Why study in  <span className='span-red'> CANADA </span>from Nepal?</h1>


            <p className='parac'>Canada has emerged as a favored destination for international students, including those from Nepal, seeking quality education in a diverse and welcoming atmosphere. Nepalese students are increasingly drawn to Canada for higher education due to various compelling factors, including academic excellence, diverse program options, affordability, and a high standard of living. Studying in Canada from Nepal offers access to world-class education, diverse program options, affordable tuition, ample work opportunities, a high standard of living, pathways to permanent residency, and exposure to a multicultural environment, making it an ideal choice for Nepalese students seeking a quality education abroad.</p>

        </div>
        

        <div>
            <h2 className='h2-blue'>Key Advantages of Pursuing Higher Education in the <span className='span-red'>CANADA</span> for Nepali Students</h2>
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
        
     <div className='pushdown'>
            <h2 className='h2-blue'>Top Universities for Nepalese Students in <span className='span-red'>CANADA</span></h2>
            <span>
                <p>The following table presents the top 10 universities in the United States, listing each university's name, and it’s CANADA rank.</p>
            </span>
        </div>
        
        <div className="table-s">
            <table className='table-og'>
                <thead className='thead'>

                    <tr>
                        <th scope='col' className='th-scope'>
                          S.N
                        </th>
                        <th scope="col" className="th-scope">
                            Universities
                        </th>
                        <th scope="col" className="th-scope2">
                            USA rank (2023)
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {universities.map((university, index) => (
                        <tr key={university.id} className="tr1">
                            <td className="th-scope">{index + 1}</td>
                            <td className="th-scope">{university.name}</td>
                            <td className="th-scope2">{university.rank}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            </div>

           
            <h2 className='h2-blue'>Top Courses for Nepalese Students in <span className='span-red'>CANADA</span></h2>

<p className='p-table'>Studying in the Canada offers more than just academic learning; it's an opportunity to interact with a diverse international student community akin to exploring different flavors. Programs like STEM provide practical exposure through internships, allowing students to delve into fields like science and technology. <span className='gap'>Canada fosters an environment where students can pursue their passions, whether in STEM disciplines or other areas, evident in the diverse academic interests of Nepalese students, ranging from computer science and engineering to business administration and healthcare. These choices align with global industry trends and reflect the aspirations of students seeking a holistic education.</span> </p>


 <div className="table-s">
<table className='table-og'>
    <thead className='thead'>

        <tr>
            
            <th scope="col" className="th-scope2">
                Course
            </th>
            <th scope="col" className="th-scope">
                Description
            </th>
        </tr>

    </thead>

    <tbody>
        {courses.map((course, index) => (
            <tr key={course.id} className="tr1">
               
                <td className="th-scope2">{course.name}</td>
                <td className="th-scope">{course.des}</td>
            </tr>
        ))}
    </tbody>

</table>
</div>

<h2 className='h2-blue'>Scholarships in <span className='span-red'>CANADA</span></h2>

<p>Despite the expenses associated with Canadian degrees, there are numerous scholarships available to support international students, including those from Nepal. Most institutions offer scholarship opportunities, many of which are open to overseas applicants. However, candidates may need to fulfill certain requirements such as academic assessments or English proficiency tests like IELTS or TOEFL.</p>

<div className='pushdown'>
            <h2 className='h2-blue'>Government of Canada Scholarships:</h2>
            </div>
            <ul className='ul-de'>

  <li className='li-de'> <span className='span-blue'>IDRC Research Awards:</span>Offered to students from developing countries, including Nepal and India, covering research support up to $15,000 and travel expenses. Eligible candidates must be enrolled in master's or doctoral programs.</li>


  <li className='li-de'><span className='span-blue'>  Vanier Canada Graduate Scholarship Program:</span> Granted to 166 recipients annually, this scholarship requires applicants to demonstrate leadership skills and research potential in their chosen field. Valued at $50,000 per year for three years</li>


   

  <li className='li-de'><span className='span-blue'>OGS Graduate Scholarships:</span>Collaboratively provided by the Canadian government and selected institutions, this scholarship offers CAD 15,000 per year to international students enrolled at participating institutions.</li>

   
 <li className='li-de'><span className='span-blue'>Quebec Provincial Government Scholarship:</span>Available to master's students at universities in Quebec, offering CAD 25,000 per year for doctoral students and CAD 35,000 per year for postdoctoral students</li>

 
  <li className='li-de'><span className='span-blue'> Post-Doctoral Fellowship:</span>Open to students enrolled in natural and social science or health research postgraduate programs, awarding 70 fellowships annually valued at $70,000 (taxable) for a duration of two years</li>
  

</ul>
            

    </div>
  )
}

export default Page2
