import React from 'react'

import Back from "../common/back/Back"
import CountryCard from "./CountryCard"
import "./country.css"
import Faq from "./Faq"
import './page.css'; // Import CSS file

const Page3 = () => {

  const universities = [
    { id: 1. , name: 'University of Melbourne', rank: 1 },
    { id: 2. , name: 'Monash University', rank: 2 },
    { id: 3. , name: 'The University of Queensland', rank: 3 },
    { id: 4. , name: 'University of Sydney', rank: 4 },
    { id: 5. , name: 'Australian National University', rank: 5 },
    { id: 6. , name: 'UNSW Sydney', rank: 6 },
    { id: 7. , name: 'University of Adelaide', rank: 7 },
    { id: 8., name: 'The University of Western Australia', rank: 8 },
    { id: 9., name: 'University of Technology Sydney', rank: 9 },
    { id: 10., name: 'TMacquarie University', rank: 10},
    
];

const courses = [
  {name:'Accounting', des:'Involves the systematic recording, analysis, and interpretation of financial transactions, crucial for businesses financial management and decision-making processes.'},
  {name:'Architecture', des:'Focuses on the design, planning, and construction of buildings and structures, integrating creativity, aesthetics, and functionality.'},
  {name:'Computer Science & IT', des:'Explores the theory, design, development, and application of computer systems and software, essential for innovation and technological advancement.'},
  {name:'Tourism & Hospitality Management', des:'Covers the management and operation of hospitality and tourism businesses, emphasizing customer service, marketing, and sustainability in the hospitality industry.'},
  {name:'Psychology',des:'Studies human behavior and mental processes, aiming to understand and address individual and societal issues through research, assessment, and therapy.'},
  {name:'Engineering',des:'Involves the application of scientific principles and mathematical methods to design, develop, and maintain structures, machines, systems, and processes.'},
  {name:'Nursing',des:'Focuses on promoting health, preventing illness, and providing care to individuals, families, and communities, addressing physical, emotional, and social needs.'},
  {name:'Health & Medicine',des:'Encompasses various disciplines dedicated to maintaining and improving human health, including medical diagnosis, treatment, research, and public health initiatives.'},
  {name:'Education',des:'Prepares individuals to become educators and instructional leaders, emphasizing teaching methods, curriculum development, and educational psychology.'},
  {name:'Social Work',des:'Focuses on helping individuals, families, and communities overcome challenges and improve their well-being through advocacy, counseling, and support services.'},
 ]

 const tests = [
  {name:'PTE Academic (Pearson Test of English Academic)' , des:'Computer-based assessment measuring the speaking, writing, reading, and listening proficiencies of non-native English speakers.'},
  {name:'IELTS (International English Language Testing System)' , des:'Assesses the language competency of individuals aspiring to study or work in English-speaking environments.'},
  {name:'TOEFL (Test of English as a Foreign Language)' , des:'Evaluates the proficiency of non-native English speakers in comprehending and utilizing English within an academic context.'},
  {name:' OET (Occupational English Test)' , des:'The Occupational English Test (OET) is a language proficiency test specifically designed for healthcare professionals. It assesses the English language skills of healthcare professionals who seek to register and practice in English-speaking environments, including Australia.'},
  {name:'Cambridge English Exams (e.g., Cambridge English: Advanced)' , des:"Cambridge English Exams, including the Cambridge English: Advanced (CAE), are internationally recognized proficiency tests designed to assess English language skills for academic and professional purposes."},

 ]
 const intakes =[
  {name:'Fall (February/March)', des:'High', des1:'Commences the academic year; offers a wide range of programs and courses.'},
  {name:'Spring (July/August)', des:'Moderate', des1:'Ideal for students with adjusted timelines or seeking a mid-year start; provides a fresh academic beginning.'},
  {name:'Summer (November/December)', des:'Low', des1:'Less common intake; may offer shorter-term or specialized programs.'},
 ]

 const programs =[
  {name:'Undergraduate Courses', des:'$20,000 – $45,000'},
  {name:'Postgraduate Courses', des:'$22,000 – $50,000'},
  {name:'PhD Courses', des:'$22,000 – $50,000'},
  {name:'Doctoral Degree', des:'$18,000 – $42,000'},
 ]

 const expenses =[
  {name:'Accommodation', des:'$800 – $1,500'},
  {name:'Personal Care', des:'$50 – $100'},
  {name:'Transportation', des:'$100 – $200'},
  {name:'Food', des:'$200 – $400'},
  {name:'Internet and Phone', des:'$50 – $100'},
 ]


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
            <p className='parat'>For Nepali students, opting for Australia as their study abroad destination offers a distinctive chance to enhance academic knowledge while fostering personal and professional development. Here are compelling reasons why choosing Australia is a strategic decision for Nepali students seeking higher education:</p>
            <div>
 
            <p className='parat'><span className='topic'><span className='span-red'>1)</span>Academic Excellence:</span>  Australia boasts world-renowned universities known for their high academic standards and innovative teaching methods, providing Nepali students with quality education and research opportunities.</p>
             <section>
                <p className='parat'><span className='topic'><span className='span-red'>2)</span>Pathways to Permanent Residency:</span>   Australia offers various immigration pathways for international students, including post-graduate work visas and skilled migration programs, providing opportunities for Nepali students to build their careers and settle permanently in Australia.</p>
             </section>

             <section>
                <p className='parat'><span className='topic'><span className='span-red'>3)</span>Affordable Education:</span> Compared to other study destinations, Australia offers competitive tuition fees and living costs, making it financially feasible for Nepali students to pursue their education without compromising on qualit</p>
             </section>
              

             

             <section>
              <p className='parat'><span className='topic'><span className='span-red'>4)</span>Abundant Work Opportunities:</span>  Australia provides ample opportunities for international students to work part-time during their studies and gain valuable work experience, enhancing their employability upon graduation.</p>
             </section>

             <section>
                <p className='parat'><span className='topic'><span className='span-red'>5)</span>Diverse Program Options:</span> Australia offers a wide range of programs across various disciplines, allowing Nepali students to explore their interests and tailor their educational experience to their career aspirations.</p>
             </section>


              <section>
                <p className='parat'><span className='topic'><span className='span-red'>6)</span>Global Recognition:</span> Degrees from Australian universities are globally recognized and highly regarded by employers worldwide, enhancing the career prospects and global mobility of Nepali students.</p>
              </section>

              <section>
                <p className='parat'><span className='topic'><span className='span-red'>7)</span>High Quality of Life:</span> Australia is known for its high standard of living, safety, and multicultural environment, offering Nepali students a comfortable and enriching living experience while studying abroad.</p>
              </section>
          


            </div>
        </div>

        <img src="/images/mid pic aus " alt="CANADA Page 2"  className='img2' />
        <div class="buttons">
    <button>About Australia</button>
     <button>Universities</button>
     <button>Courses </button>
     <button>Scholarship</button>
     </div>
    

     <div className='pushdown'>
            <h2 className='h2-blue'>Top Universities for Nepalese Students in <span className='span-red'> Australia</span></h2>
            <span>
                <p>The following table presents the top universities in the Australia, listing each university's name, and it’s Australia rank.</p>
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
                        Australia rank (2023)
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


            <h2 className='h2-blue'>Top Courses for Nepalese Students in <span className='span-red'> Australia</span></h2>

<p className='p-table'>Studying in Australia offers more than just academic development; it's an opportunity to immerse oneself in a multicultural student community, akin to experiencing a variety of flavors. Programs like STEM provide hands-on experience through internships, allowing students to delve into fields such as science and technology. <span className='gap'>Australia fosters an environment where students can pursue their passions, whether in STEM disciplines or other areas, as evidenced by the diverse academic interests of Nepali students, spanning from computer science and engineering to business administration and healthcare. These choices resonate with global industry trends and mirror the aspirations of students seeking a comprehensive education.</span> </p>


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


<h2 className='h2-blue'>Scholarships in <span className='span-red'>Australia</span></h2>

<p>Despite the costs associated with Australian degrees, there are numerous scholarships available to support international students, including those from Nepal. Most institutions offer scholarship opportunities, many of which are open to overseas applicants. However, candidates may need to meet specific requirements such as academic assessments or English proficiency tests like PTE or IELTS.</p>

<div className='pushdown'>
            <h2 className='h2-blue'>Types of Scholarships:</h2>
            </div>
            <ul className='ul-de'>

  <li className='li-de'> <span className='span-blue'>Australian Government Scholarships:</span> These cover full tuition fees, travel expenses, and living expenses for undergraduate, postgraduate, and research students. They are highly competitive and awarded based on academic merit, leadership potential, and community contribution.</li>


  <li className='li-de'><span className='span-blue'>  University Scholarships:</span> Many Australian universities provide scholarships covering full or partial tuition fees, and sometimes living expenses, based primarily on academic merit but may also consider factors like leadership potential or financial need.</li>


   

  <li className='li-de'><span className='span-blue'>Private Scholarships:</span> Offered by organizations, these scholarships can cover tuition fees, living expenses, or both, with specific eligibility criteria such as nationality or course of study</li>

   
 <li className='li-de'><span className='span-blue'>Merit-Based Scholarships:</span>Awarded based on academic performance and achievements.</li>
</ul>


 <div className='pushdown'>
<h2 className='h2-blue'>Some major scholarships available for Nepalese students include:</h2>
 </div>

 <div class="cont">

 <ul className='ul-1'>
  <li className='li-blue'>ECU Scholarship</li>
  <li className='li-blue'>
   ATMC USC Scholarship</li>
  <li className='li-blue'>
UTS Insearch Scholarship</li>
  <li className='li-blue'>
CQU University Scholarship</li>
  <li className='li-blue'>CSU Study Centre Scholarship</li>
  <li className='li-blue'>Victoria University Scholarship</li>
  <li className='li-blue'>University of Wollongong Scholarship</li>
 </ul>

 <ul className='ul-2'>
  <li className='li-blue'>ECU Scholarship</li>
  <li className='li-blue'>
   ATMC USC Scholarship</li>
  <li className='li-blue'>
UTS Insearch Scholarship</li>
  <li className='li-blue'>
CQU University Scholarship</li>
  <li className='li-blue'>CSU Study Centre Scholarship</li>
  <li className='li-blue'>Victoria University Scholarship</li>
  <li className='li-blue'>University of Wollongong Scholarship</li>
 </ul>


 <ul className='ul-3'>
  <li className='li-blue'>ECU Scholarship</li>
  <li className='li-blue'>
   ATMC USC Scholarship</li>
  <li className='li-blue'>
UTS Insearch Scholarship</li>
  <li className='li-blue'>
CQU University Scholarship</li>
  <li className='li-blue'>CSU Study Centre Scholarship</li>
  <li className='li-blue'>Victoria University Scholarship</li>
  <li className='li-blue'>University of Wollongong Scholarship</li>
 </ul>
 </div>
   

 <div className='pushdown'>

<h2 className='h2-blue'>Test Required to Study in <span className='span-red'>Australia</span></h2>
</div>


<p>Comprehending the entry process is pivotal for studying in Australia, akin to having a well-defined strategy for smooth proceedings. This encompasses the application process and examinations like PTE or IELTS, which are integral. <span className='gap'>

The table offers a thorough examination of different English proficiency assessments utilized for university admissions in Australia. It comprises essential details such as test names, descriptions, and their significance in evaluating language proficiency for academic pursuits.</span> </p>


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

<h2 className='h2-blue'>Intakes in the <span className='span-red'>Australia</span> for  Nepalese Students</h2>
</div>

<p>For Nepali students aiming to study in Australia, comprehending the academic calendar is crucial. Australia, like Canada, follows three main intake periods – Fall, Spring, and Summer – each with its distinct features. These intake periods offer flexibility, enabling Nepali students to align their academic pursuits with their schedules and preferences. This concise overview provides students with essential information to navigate and select the intake period that aligns best with their educational aspirations in Australia.</p>

<div className="table-s">
<table className='table-og'>
<thead className='thead'>

   <tr>
       
       <th scope="col" className="th-scope">
           Intakes
       </th>
       <th scope="col" className="th-scope2">
       Preference among Nepalese Student
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

<h2 className='h2-blue'>Cost to Study in the <span className='span-red'>Australia</span></h2>
</div>

<div className="table-s">
<table className='table-og'>
<thead className='thead'>

   <tr>
       
       <th scope="col" className="th-scope">
           Level of Study
       </th>
       <th scope="col" className="th-scope2">
       Average Annual Tuition Fees (in AUD)
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


<p className='impp'><span className='span-red'>Please note that </span>  these figures are average estimates and may vary considerably based on the university, program, and individual circumstances. It is recommended to consult the official websites of the institutions you are considering to obtain the most current information regarding tuition fees for your selected field of study.
</p>

<div className='pushdown'>

<h3 className='h2-blue'>Cost of Living in the <span className='span-red'>Australia</span></h3>
</div>

<div className="table-s">
<table className='table-og'>
<thead className='thead'>

   <tr>
       
       <th scope="col" className="th-scope">
           Expenses
       </th>
       <th scope="col" className="th-scope2">
       Average Monthly Cost (in AUD)
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

export default Page3
