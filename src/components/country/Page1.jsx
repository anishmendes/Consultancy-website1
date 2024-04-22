import React from 'react'
// import Back from "../common/back/Back"
// import CountryCard from "./CountryCard"
import "./country.css"
import Faq from "./Faq"
import './page.css'; // Import CSS file


const Page1 = () => {


    const universities = [
        { id: 1. , name: 'Massachusetts Institute of Technology (MIT)', rank: 2 },
        { id: 2. , name: 'Stanford University', rank: 6 },
        { id: 3. , name: 'Harvard University', rank: 2 },
        { id: 4. , name: 'California Institute of Technology (Caltech)', rank: 9 },
        { id: 5. , name: 'Princeton University', rank: 1 },
        { id: 6. , name: 'University of Pennsylvania', rank: 8 },
        { id: 7. , name: 'University of Chicago', rank: 6 },
        { id: 8., name: 'Columbia University', rank: 12 },
        { id: 9. , name: 'University of California, Berkeley', rank: 15 },
        { id: 10. , name: 'University of California, Los Angeles (UCLA)', rank: 15 },
    ];
     
   const courses = [
    {name:'Computer Science', des:'Focuses on programming and technology.'},
    {name:'Business Administration', des:'Involves management and entrepreneurship.'},
    {name:'Engineering', des:'Includes mechanical, electrical, and computer engineering.'},
    {name:'Data Science', des:'Deals with analyzing complex data sets.'},
    {name:'Medicine',des:'Encompasses pre-med, nursing, and healthcare management.'},
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
    {name:'Duolingo English Test' , des:'Online proficiency examination gauging English language skills for admission to English-speaking universities.'},
    {name:'SAT (Scholastic Assessment Test)' , des:"College entrance exam featuring an optional Essay section to evaluate a student's English comprehension."},

   ]

   const intakes =[
    {name:'Fall (August/September)', des:'Preferred by over 70% of Nepali students', des1:'Offers a vibrant university experience with bustling campus life'},
    {name:'Spring (January/February)', des:'Chosen by approximately 20% of Nepali students', des1:'Provides a fresh beginning in the new year, suitable for individuals with adjusted timelines'},
    {name:'Summer (May/June)', des:'Less commonly selected', des1:'Facilitates accelerated academic progress for students seeking to expedite their studies'},
   ]

   const programs =[
    {name:'Community Colleges', des:'$6,000 to $20,000 per year'},
    {name:'Undergraduate Programs', des:'$20,000 to $40,000 per year'},
    {name:'Graduate Programs', des:'$20,000 to $45,000 per year'},
    {name:'Doctoral Degree', des:'$28,000 to $55,000 per year'},
   ]

   const expenses =[
    {name:'Electricity', des:'$60 to $100 per month'},
    {name:'Internet', des:'$45 to $50 per month'},
    {name:'Transportation', des:'$45 to $100 per month'},
    {name:'Food', des:'$400 to $600 per month'},
    {name:'Phone', des:'$50 to $100 per month'},
   ]


  return (

      <div  className="usa-page">
        <h1 className='heading1'><span className='span1'>Study In</span> USA</h1>
        <h3 className='para1'>"Embark on an educational journey like no other – <span className='span-red'> study in the USA and pave the way to a bright future!"</span></h3>
        <img src="/images/usa page1" alt="USA Page 1"  className='img1'/>

        <div>
            <h1 className='headingc'>Why study in  <span className='span-red'> USA </span>from Nepal?</h1>


            <p className='parac'>Studying in the USA from Nepal offers unparalleled 
            academic and personal growth opportunities, with top-ranked universities providing world-class education. Renowned for innovative teaching methods and cutting-edge research facilities, American institutions offer a vibrant campus life.
             Access to a global network of professionals enhances career prospects and fosters cultural exchange. The welcoming environment for international students, coupled with scholarship options, makes the USA an attractive destination for Nepalese
              students seeking to pursue academic aspirations and broaden horizons.</p>

        </div>

        <div>
            <h2 className='h2-blue'>Key Advantages of Pursuing Higher Education in the <span className='span-red'>USA</span> for Nepali Students</h2>
            <p className='parat'>For Nepali students, selecting the USA as their study abroad destination presents a distinct opportunity to not only enhance academic knowledge but also foster personal and professional development. Here are compelling reasons why opting for the USA is a strategic choice for Nepali students seeking higher education :</p>
            <div>

            <p className='parat'><span className='topic'><span className='span-red'>1)</span>Academic Distinction:</span> The USA is home to  numerous top-tier universities renowned for their academic rigor and pioneering teaching approaches. Enrolling in a US university guarantees access to state-of-the-art knowledge and expertise, laying a strong groundwork for forthcoming achievements.</p>
             <section>
                <p className='parat'><span className='topic'><span className='span-red'>2)</span>Financial Aid and Scholarships:</span> While higher education in the USA can be expensive, many universities offer financial aid, scholarships, and assistantships to international students, including those from Nepal, to help alleviate the financial burden.</p>
             </section>

             <section>
                <p className='parat'><span className='topic'><span className='span-red'>3)</span>Global Recognition:</span> Degrees from US universities are recognized worldwide, which can enhance career prospects and open doors to opportunities in Nepal or abroad.</p>
             </section>


             <section>
              <p className='parat'><span className='topic'><span className='span-red'>4)</span>Career Opportunities:</span> Graduating from a US university can enhance employability both in Nepal and internationally, as employers often value the skills, knowledge, and cultural adaptability gained from a US education.</p>
             </section>

             <section>
                <p className='parat'><span className='topic'><span className='span-red'>5)</span>Personal Development:</span> Studying abroad requires independence, adaptability, and resilience, all of which contribute to personal growth and self-confidence. Nepali students return home with a broader worldview and valuable life experiences.</p>
             </section>

              <section>
                <p className='parat'><span className='topic'><span className='span-red'>6)</span>Cultural Exchange:</span> Living and studying in the USA exposes Nepali students to different cultures, languages, and perspectives. This cultural immersion fosters personal growth, cross-cultural understanding, and tolerance.</p>
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
        
        <div className='pushdown'>
            <h2 className='h2-blue'>Top Universities for Nepalese Students in <span className='span-red'>USA</span></h2>
            <span>
                <p>The following table presents the top 10 universities in the United States, listing each university's name, and it’s USA rank.</p>
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


            <h2 className='h2-blue'>Top Courses for Nepalese Students in <span className='span-red'>USA</span></h2>

            <p className='p-table'>Studying in the USA offers more than just academic learning; it's an opportunity to interact with a diverse international student community akin to exploring different flavors. Programs like STEM provide practical exposure through internships, allowing students to delve into fields like science and technology. <span className='gap'>The USA empowers students to pursue their passions, whether in STEM fields or other areas, as reflected in the varied academic interests of Nepalese students, spanning from computer science and engineering to business administration and healthcare. These choices resonate with both prevailing global industry trends and the ambitions of students aspiring for a comprehensive education.</span> </p>


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


            <h2 className='h2-blue'>Scholarships in <span className='span-red'>USA</span></h2>

            <p>Despite the high cost of American degrees, numerous scholarships are accessible to assist international students. Nearly all institutions offer scholarship opportunities, many of which are open to overseas applicants. However, candidates may be required to complete SAT or ACT examinations. According to the Fulbright Commission, nearly 600 American colleges provide scholarships worth $20,000 or more to international students, often considering factors such as academic achievement, financial need, or extracurricular engagement during evaluation.</p>
             <div className='pushdown'>
            <h2 className='h2-blue'>Types of Scholarship</h2>
              
              <h3 className='h3-red'>Institutional Scholarships:  </h3>
              <p>Most colleges offer financial assistance to international students in some capacity. Many universities have their own scholarship programs tailored for international students.</p>
                </div>
                 

                 <div className='pushdown'>

              <h3 className='h3-red'>Merit-Based Scholarships:</h3>
              <p>These scholarships are awarded based on a student's academic excellence. They encompass various types:</p>
               <span className='span-blue'>a.) Academic Scholarships:</span>
               <p>Institutions or private organizations may offer these scholarships to students with high SAT or ACT scores.</p>

               <span className='span-blue'>b.) Athletic Scholarships:</span>
               <p>Reserved for student-athletes, these scholarships are competitive and subject to specific regulations. They present a significant opportunity for international students interested in studying in the US</p>

              <span className='span-blue'>c.) Need-Based Scholarships: </span>
              <p>Awarded based on the recipient's financial circumstances, these scholarships are primarily available to US citizens. However, some colleges extend need-based scholarships to international students.</p>
                 </div>

                 <div className='pushdown'>

                 <h2 className='h2-blue'>Test Required to Study in <span className='span-red'>USA</span></h2>
                 </div>


            <p>Grasping the entry process is pivotal, akin to having a structured strategy to ensure seamless proceedings. This encompasses the application process and examinations like TOEFL, which play a crucial role. <span className='gap'>
                The table offers a thorough examination of different English proficiency assessments utilized for university admissions in the USA. It comprises essential details such as test names, descriptions, and their significance in evaluating language proficiency for academic pursuits.</span> </p>


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

       <h2 className='h2-blue'>Intakes in the <span className='span-red'>USA</span> for Nepali Students</h2>
       </div>

       <p>For Nepali students aiming to pursue studies in the USA, comprehending the academic calendar holds significant importance. The United States presents three primary intakes – Fall, Spring, and Summer – each characterized by distinct attributes. These intake periods offer flexibility, enabling Nepali students to harmonize their academic pursuits with their schedules and inclinations. This concise overview establishes the framework for students to navigate and select the intake that best aligns with their educational aspirations in the USA.</p>

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


            <h2 className='h2-blue'>Requirements for Nepali Students to Study in the <span className='span-red'>USA</span></h2>
            
          <div className='pushdown'>

        <ul className='ul-de'>

        <li className='li-de'> <span className='span-blue'>F-1 Student Visa:</span>Acquire an F-1 visa for studying in the USA</li>
        <li className='li-de'><span className='span-blue'>Admissions:</span>Apply to universities offering robust programs; review program-specific prerequisites</li>
        <li className='li-de'><span className='span-blue'>English Proficiency:</span>Demonstrate proficiency through language tests such as TOFEL or IELTS.</li>
        <li className='li-de'><span className='span-blue'>Standardized Tests:</span>Certain programs may necessitate GRE or GMAT  scores.</li>
        <li className='li-de'><span className='span-blue'>Financial Proof:</span>Present documentation of financial capability to fund tuition and living costs.</li>
        <li className='li-de'><span className='span-blue'>Letters of Recommendation:</span>Obtain compelling recommendation letters from educators or professionals</li>
        <li className='li-de'><span className='span-blue'>Health Insurance:</span>Secure coverage, often mandatory for international students.</li>

        </ul>
          </div>



          <div className='pushdown'>

          <h2 className='h2-blue'>Cost to Study in the <span className='span-red'>USA</span></h2>
          </div>

          <div className="table-s">
            <table className='table-og'>
                <thead className='thead'>

                    <tr>
                        
                        <th scope="col" className="th-scope">
                            Program
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

 <h3 className='h2-blue'>Cost of Living in the <span className='span-red'>USA</span></h3>
 </div>

      <div className="table-s">
            <table className='table-og'>
                <thead className='thead'>

                    <tr>
                        
                        <th scope="col" className="th-scope">
                            Expenses
                        </th>
                        <th scope="col" className="th-scope2">
                            Cost in USD
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

export default Page1
