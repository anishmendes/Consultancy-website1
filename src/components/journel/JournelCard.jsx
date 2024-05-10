import React from "react"
import {journel} from "../../dummydata"
import { Link } from "react-router-dom"
// import { motion } from 'framer-motion';

const JournelCard = () => {
    const routeTo = () => {
        window.scrollTo({
          top:0,
      
        })
      }
    return (
        <>
        
      
        
        
        {journel.map((val,index) => ( 
             
                <Link onClick={routeTo} to={`/country/page${index + 1}`}>
               
                    
            <div 
              key={index}
            className="items shadow">
                <div  className="img">
                    <img  src={val.cover} alt="" />
                </div>
                <div   className="text">
                    <div className="admin flexSB">
                        <span>
                            <i className="fa fa-user"></i>
                            <label htmlFor=''>{val.type}</label>
                        </span>
                        <span>
                        <i className='fa fa-calendar-alt'></i>
                       <label htmlFor=''>{val.date}</label>
                        </span>

                        <span>
                        <i className='fa fa-comments'></i>
                       <label htmlFor=''>{val.com}</label>
                        </span>
                    </div>
                    <h1>{val.title}</h1>
                    <p>{val.desc}</p>
                </div>
            </div>
            </Link>
        ))}
        
        
        </>
    )
}


export default JournelCard