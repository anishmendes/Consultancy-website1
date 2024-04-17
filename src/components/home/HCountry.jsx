import React from "react"
import Heading from "../common/heading/Heading"
import CountryCard from "../country/CountryCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='OUR Packages' title='Study In Your Dream Country' />
        <div className='price container grid'>
          <CountryCard />
        </div>
      </section>
    </>
  )
}

export default Hprice