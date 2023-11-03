import React from 'react'
import imageLeft from '../images/imageleft.png'
import imageRight from '../images/imageright.png'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='text-container'>
            <div className="large-text">"Where every dish is a wish"</div>
            <div className="small-text">"Where every dish is a wish"</div>
        </div>
        <div className='rectangle'></div>
        <div className='rectangle-2'></div>
        <a href='/best-rated' className='left-button'>Best rated</a>
        <a href='/info' className='right-button'>Our mission and more info</a>
        <img src={imageLeft} alt="Left" className='left-image' />
        <img src={imageRight} alt="Right" className='right-image' />
    </div>
  )
}

export default Homepage