import React, {useState } from "react"
import {Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { motion } from 'framer-motion';

const Header = () => { 
    const [click, setClick] = useState(false)

    return (
        <>
        <Head/>
        <header>
            <nav className="flexSB">
                <ul className={click ? "mobile-nav" : "flexSB" } onClick={() => setClick(false)}>
                    <li>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/courses'>All Courses</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Countries</Link>
                    </li>
                    <li>
                        <Link to="/journel">Journal</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <motion.div 
                 whileHover={{
                    scale: 1.1,
                    backgroundColor: "#d35a3e"
                  }}
                  transition={{ duration: 0.7, yoyo: Infinity }}
                className="start">
                    <div 
                    
                    className="button">
                       REGISTER NOW
                    </div>
                    <button className="toggle onClick={() => setClick(!click)}">
                    {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                    </button>
                </motion.div>
            </nav>
        </header>
        
        
        
        </>
    )
}

export default Header