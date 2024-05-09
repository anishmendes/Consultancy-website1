import { motion } from 'framer-motion';
import React, { useState } from "react";
import { Link } from 'react-router-dom'; 

const PriceCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const routeTo = () => {
    window.scrollTo({
      top:0,
  
    })
  }

  const price = [
    {
      name: "Study In USA",
      price: "49K",
      desc: "The USA has one of the top-ranked universities in the world. Over 4,000 schools and universities are located in the United States. In the United States",
      cover: "./images/usa",
    },
    {
      name: "Study In Canada",
      price: "79K",
      desc: "Since Canada is a world leader in language training. 21% of all Canadian people speak a foreign language as a native language so study in canada. ",
      cover: "./images/canada", 
    },
    {
      name: "Study In Australia",
      price: "109k",
      desc: "Australia is not only a student destination but overall a dynamic  country that offers a good educational and career life to students from all over the world.",
      cover: "./images/aus",
    },
    {
      name: "Study In UK",
      price: "149K",
      desc: "There are lots of reasons that you should consider going UK for your abroad study. UK has an international reputation as  provider of quality education.",
      cover: "./images/uk", 
    },
  ];

  return (
    <>
      {price.map((val, index) => (
        <motion.div
          key={index}
          className='items shadow'
          whileHover={{
            scale: 1.1,
            backgroundColor: "#cfd3d3"
          }}
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
              <h4>{val.name}</h4>
              <h1>
                <span>$</span>
                {val.price}
              </h1>
              <p>{val.desc}</p>
              <Link onClick={routeTo} to={`/country/page${index + 1}`}>
                <button className='outline-btn'>GET STARTED</button>
              </Link>
            </>
          )}
        </motion.div>
      ))}
    </>
  );
}

export default PriceCard;
