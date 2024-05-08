import "./popup.css"
import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import CountryCard from "../country/CountryCard"

const Popup = () => {
    const [popup, setPopup] = useState(true);
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

    return (
        popup ?
        <div data-aos='fade' className='popupmain' >
            <button onClick={() => setPopup(!popup)} className='popbutton'><IoClose /></button>
            <div  className='popdiv'>
                Topic
            <CountryCard />
            </div>
        </div>
        :
        null
    )

}
export default Popup;