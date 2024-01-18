import React from 'react'
import Navbar from "../Navbar.js";
import imageLeft from "./images/imageleft.png"
import imageRight from './images/imageright.png'
import PresentationImage from './PresentationImage.js';
import "./HomepageStyle.css"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className='homepage'>
        <PresentationImage />
        <div className='text-container'>
            <div className="large-text">"Where every dish is a wish"</div>
            <div className="small-text">"Where every dish is a wish"</div>
        </div>
        <div className='rectangle-1'></div>
        <div className='rectangle-2'></div>
        <a href='/best-rated' className='left-button'>Best rated</a>
        <a href='/about-us' className='right-button'>Our mission and more info</a>
        <img src={imageLeft} alt="Left" className='left-image' />
        <img src={imageRight} alt="Right" className='right-image' />
      </div>
    </div>
  )
}

export default Homepage;