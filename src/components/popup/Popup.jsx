import "./popup.css"
import React, { useState, useEffect } from 'react'
import { IoClose, IoHandRight } from "react-icons/io5";
import CountryCard from "../country/CountryCard"

import { Link } from 'react-router-dom'; 

const Popup = () => {
  const buttonStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    padding: '20px 0',
    zIndex: 1,
    textDecoration: 'none', // Ensure link default style is removed
    color: '#fff', // Match button text color
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
 
  
  
};

    const [popup, setPopup] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    
    const routeTo = () => {
        window.scrollTo({
          top:0,
      
        })
      }
    useEffect(() => {
        if (popup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [popup]);

    const price = [
        {
          name: "Study In USA",
          price: "Click Below",
          desc: "The USA has one of the top-ranked universities in the world. Over 4,000 schools and universities are located in the United States. In the United States",
          cover: "./images/usa",
        },
        {
          name: "Study In Canada",
          price: "Click Below",
          desc: "Since Canada is a world leader in language training. 21% of all Canadian people speak a foreign language as a native language so study in canada. ",
          cover: "./images/canada", 
        },
        {
          name: "Study In Australia",
          price: "Click Below",
          desc: "Australia is not only a student destination but overall a dynamic  country that offers a good educational and career life to students from all over the world.",
          cover: "./images/aus",
        },
        {
          name: "Study In UK",
          price: "Click Below",
          desc: "There are lots of reasons that you should consider going UK for your abroad study. UK has an international reputation as  provider of quality education.",
          cover: "./images/uk", 
        },
      ];
    

    return (
        popup ?
        <div data-aos='fade' className='popupmain' >
            <button onClick={() => setPopup(!popup)} className='popbutton'><i class="fas fa-times"></i></button>

            {/* <div className="headingcoun2">
      <Link to="/form" style={buttonStyle}>REGISTER NOW</Link>
        </div> */}
        
            <div  className='popdiv'>
            <h1 className="headingcoun">Your Dream Country Is Down Below</h1>
            {price.map((val, index) => (
        <div
          key={index}
          className='allpop'
          
          transition={{ duration: 0.7, yoyo: Infinity }}
          whileTap={{ scale: 1}}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Display cover image only if not hovered */}
          {hoveredIndex !== index && (
            <img src={val.cover} alt='' />
          )}

          {/* Display other elements only if hovered */}
          {hoveredIndex === index && (
            <>
              <h4 className="headtop">{val.name}</h4>
              <h1>
                
                {val.price}
              </h1>
              <p className="parapop">{val.desc}</p>
              <Link onClick={routeTo} to={`/country/page${index + 1}`}>
                <button className='outline-btn'>GET STARTED</button>
              </Link>
            </>
          )}
        </div>
      ))}  
            </div>
        </div>
        :
        null
    )

}
export default Popup;