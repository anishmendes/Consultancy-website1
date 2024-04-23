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


        

</div>
  )
}

export default Page3
