import React from "react"
import Back from "../common/back/Back"
import CountryCard from "./CountryCard"
import "./country.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <div  className="back-img">
            <Back title='Contact us' />
      <section className='price padding'>
        <div className='container grid'>
          <CountryCard />
        </div>
      </section>
      <Faq />
    </div>
  )
}

export default Pricing