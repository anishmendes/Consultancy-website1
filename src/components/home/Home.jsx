import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import HCountry from "./HCountry"
import Testimonal from "./testimonal/Testimonal"


const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
     
      <Hblog />
      <HCountry />
    </>
  )
}

export default Home