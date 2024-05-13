import React from 'react'

import Back from "../common/back/Back"
import CountryCard from "./CountryCard"
import "./country.css"
import Faq from "./Faq"
import './page.css'; // Import CSS file

const Page2 = () => {
    const routeTo = () => {
        window.scrollTo({
          top:400,
      
        })
      }
    const routeTo2 = () => {
        window.scrollTo({
          top:2200,
      
        })
      }
    const routeTo3 = () => {
        window.scrollTo({
          top:3200,
      
        })
      }
    const routeTo4 = () => {
        window.scrollTo({
          top:4100,
      
        })
      }
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


 const tests = [
  {name:'TOEFL (Test of English as a Foreign Language)' , des:'Evaluates the proficiency of non-native English speakers in comprehending and utilizing English within an academic context.'},
  {name:'IELTS (International English Language Testing System)' , des:'Assesses the language competency of individuals aspiring to study or work in English-speaking environments.'},
  {name:'PTE Academic (Pearson Test of English Academic)' , des:'Computer-based assessment measuring the speaking, writing, reading, and listening proficiencies of non-native English speakers.'},
  {name:' CAEL (Canadian Academic English Language Assessment)' , des:'A standardized test designed to evaluate English language proficiency for academic purposes. Recognized by universities and colleges across Canada'},
  {name:'Cambridge English Exams (e.g., Cambridge English: Advanced)' , des:"Cambridge English Exams, including the Cambridge English: Advanced (CAE), are internationally recognized proficiency tests designed to assess English language skills for academic and professional purposes."},

 ]
 const intakes =[
  {name:'Fall (September)', des:'High', des1:'Most common intake; aligns with the beginning of the academic year and offers a full range of programs and courses.'},
  {name:'Winter (January/February)', des:'Winter (January/February)', des1:'Ideal for students with adjusted timelines or those seeking a fresh start in the new year; offers a limited selection of programs.'},
  {name:'Summer (May/June)', des:'Low', des1:'Less common intake; provides an opportunity for accelerated academic progress or specific short-term programs.'},
 ]

 const programs =[
  {name:'Undergraduate Courses', des:'$12,000 – $25,000'},
  {name:'Postgraduate Courses', des:'$18,000 – $30,000'},
  {name:'PhD Courses', des:'$7,000 – $18,000'},
  {name:'Masters of Business Administration Courses', des:'$32,000 – $45,000'},
 ]

 const expenses =[
  {name:'Accommodation', des:'$459 – $1000 per month'},
  {name:'Books and Supplies', des:'$100 – $200 per month'},
  {name:'Transportation', des:'$80 – $150 per month'},
  {name:'Food', des:'$250 – $450 per month'},
  {name:'Internet and Phone', des:'$50 – $70 per month'},
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
    <button onClick={routeTo}>About CANADA</button>
     <button onClick={routeTo2}>Universities</button>
     <button onClick={routeTo3}>Courses </button>
     <button onClick={routeTo4}>Scholarship</button>
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

<div className='pushdown'>

                 <h2 className='h2-blue'>Test Required to Study in <span className='span-red'>CANADA</span></h2>
                 </div>


            <p>Understanding the entry process is crucial for studying in Canada, akin to having a well-defined strategy for seamless proceedings. This includes the application process and examinations like IELTS or TOEFL, which play a vital role. <span className='gap'>
                
              The table provides a comprehensive overview of various English proficiency assessments used for university admissions in Canada. It includes essential details such as test names, descriptions, and their significance in evaluating language proficiency for academic purposes.</span> </p>


                <div className="table-s">
            <table className='table-og'>
                <thead className='thead'>

                    <tr>
                        
                        <th scope="col" className="th-scope2">
                            Tests
                        </th>
                        <th scope="col" className="th-scope">
                            Description
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {tests.map((test, index) => (
                        <tr key={test.id} className="tr1">
                           
                            <td className="th-scope2">{test.name}</td>
                            <td className="th-scope">{test.des}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            </div>

            <div className='pushdown'>

       <h2 className='h2-blue'>Intakes in the <span className='span-red'>CANADA</span> for  Nepalese Students</h2>
       </div>

       <p>For Nepali students aspiring to study in Canada, understanding the academic calendar is of utmost importance. Similar to the United States, Canada also offers three primary intake periods – Fall, Spring, and Summer – each with its unique characteristics. These intake periods provide flexibility, allowing Nepali students to synchronize their academic endeavors with their schedules and preferences. This brief overview sets the stage for students to navigate and choose the intake period that best suits their educational goals in Canada.</p>

       <div className="table-s">
            <table className='table-og'>
                <thead className='thead'>

                    <tr>
                        
                        <th scope="col" className="th-scope">
                            Intakes
                        </th>
                        <th scope="col" className="th-scope2">
                        Preference among Nepali Student
                        </th>
                        <th scope="col" className="th-scope">
                        Distinctive Aspects
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {intakes.map((intake, index) => (
                        <tr key={intake.id} className="tr1">
                           
                            <td className="th-scope">{intake.name}</td>
                            <td className="th-scope2">{intake.des}</td>
                            <td className="th-scope">{intake.des1}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            </div>
           

            <h2 className='h2-blue'>Requirements for Nepali Students to Study in the <span className='span-red'>Canada</span></h2>
            
          <div className='pushdown'>

        <ul className='ul-de'>

        <li className='li-de'> <span className='span-blue'>Academic Qualifications:</span>Nepali students must meet the academic requirements set by Canadian universities or colleges for the program they wish to pursue. This typically includes a high school diploma or equivalent for undergraduate studies and a bachelor's degree for graduate studies.</li>
        <li className='li-de'><span className='span-blue'>English Language Proficiency:</span> Nepali students need to demonstrate proficiency in English by taking standardized tests such as IELTS or TOEFL. Some institutions may also accept other English proficiency tests like PTE Academic or CAEL</li>
        
        <li className='li-de'><span className='span-blue'>
       Standardized Admission Tests (if required):</span> Depending on the program and institution, Nepali students may need to take standardized admission tests such as the SAT, ACT, GRE, or GMAT.
       </li>

        <li className='li-de'><span className='span-blue'>
       Application Process:</span>Nepali students must complete the application process for their chosen institution, which typically includes submitting an online application, providing academic transcripts, letters of recommendation, a statement of purpose, and paying the application fee.</li>

        <li className='li-de'><span className='span-blue'>Study Permit:</span>Nepali students require a study permit to study in Canada. To obtain a study permit, they need to provide a letter of acceptance from a designated learning institution (DLI), proof of financial support to cover tuition fees and living expenses, and satisfy other immigration requirements.</li>


        <li className='li-de'><span className='span-blue'>
   Health Insurance:</span>Nepali students are required to have health insurance coverage while studying in Canada. Some provinces may have specific health insurance requirements for international students.</li>

        <li className='li-de'><span className='span-blue'>Financial Proof:</span>Nepali students must demonstrate their ability to cover tuition fees, living expenses, and other costs associated with studying in Canada. This may include providing bank statements, scholarship letters, or sponsorship letters.</li>

        <li className='li-de'><span className='span-blue'>Biometrics:</span>Nepali students may need to provide biometric information as part of their study permit application process. This involves providing fingerprints and a photograph at a designated biometric collection center.</li>

        </ul>
          </div>



          <div className='pushdown'>

          <h2 className='h2-blue'>Cost to Study in the <span className='span-red'>Canada</span></h2>
          </div>

          <div className="table-s">
            <table className='table-og'>
                <thead className='thead'>

                    <tr>
                        
                        <th scope="col" className="th-scope">
                            Level of Study
                        </th>
                        <th scope="col" className="th-scope2">
                            Fee(USD)
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {programs.map((program, index) => (
                        <tr key={program.id} className="tr1">
                           
                            <td className="th-scope">{program.name}</td>
                            <td className="th-scope2">{program.des}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            </div>


        <p className='impp'><span className='span-red'>Please note that </span> these figures are average estimates and may vary considerably based on the university, program, and individual circumstances. It is recommended to consult the official websites of the institutions you are considering to obtain the most current information regarding tuition fees for your selected field of study.
 </p>
 
 <div className='pushdown'>

 <h3 className='h2-blue'>Cost of Living in the <span className='span-red'>Canada</span></h3>
 </div>

      <div className="table-s">
            <table className='table-og'>
                <thead className='thead'>

                    <tr>
                        
                        <th scope="col" className="th-scope">
                            Expenses
                        </th>
                        <th scope="col" className="th-scope2">
                            Cost in CAD
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={expense.id} className="tr1">
                           
                            <td className="th-scope">{expense.name}</td>
                            <td className="th-scope2">{expense.des}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            </div>
      

            

    </div>
  )
}

export default Page2
