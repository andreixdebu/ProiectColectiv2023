import React from 'react'
import accountIcon from '../components/Homepage/images/myaccounticon.png'
import logoIcon from '../components/Homepage/images/logo-1.png'

const Navbar = () => {
  return (
    <div className='header'>
        <div className='left-container'>
            <img src={logoIcon} alt="Logo" />
            <h1 className='title'>FoodBytes</h1>
        </div>
        <div className='middle-container'>
            <ul className='nav'>
                <li><a href='/' className='button'>Home</a></li>
                <li><a href='/restaurant-list' className='button'>Restaurants</a></li>
                <li><a href='/cart' className='button'>Cart</a></li>
            </ul>
        </div>
        <div className='right-container'>
            <ul className='nav'>
                <li><a href="/profile"><img src={accountIcon} alt="Account"/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar