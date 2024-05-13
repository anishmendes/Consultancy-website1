import React from "react"
import { journel } from "../../../dummydata"
import "./footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  const routeTo = () => {
    window.scrollTo({
      top:0,
  
    })
  }
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Nepal Best Visa Services & Education.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1 className="headingcar">CARRER CONSULT</h1>
            <span>ONLINE VISA SERVICES</span>
            <p>The Consultancy has a long-standing reputation for being one of the best educational consultancy in Nepal for studying abroad.</p>

            <a href="https://www.facebook.com">
    <i className='fab fa-facebook-f icon'></i>
</a>
<a href="https://twitter.com">
    <i className='fab fa-twitter icon'></i>
</a>
<a href="https://www.instagram.com">
    <i className='fab fa-instagram icon'></i>
</a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
      <li><Link onClick={routeTo} to="/about">About Us</Link></li>
      <li><Link onClick={routeTo} to="/team">Teams</Link></li>
      <li><Link onClick={routeTo} to="/course">Courses</Link></li>
      <li><Link onClick={routeTo} to="/journel">Blog</Link></li>
      <li><Link onClick={routeTo} to="/contact">Contact us</Link></li>
    </ul>

          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Packages</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {journel.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                <Link onClick={routeTo} to="/journel">
        <img src={val.cover} alt='' />
    </Link>
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                 New Baneswor,Kathmandu,Nepal
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +977980457676
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This Website is made with <i className='fa fa-heart'></i> by ANTARIKSHYA
        </p>
      </div>
    </>
  )
}

export default Footer