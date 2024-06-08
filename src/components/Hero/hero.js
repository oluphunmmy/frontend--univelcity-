import React from 'react'
 import './hero.css'
import dark from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='Hero'>
        <div className='hero-text'>
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower 
                students with knowledge, skills and experience needed
                to excel in the dynamic field of education
            </p>
            <button className='btn'>Explore More<img src={dark} alt='' className='arrow'></img></button>
        </div>
    </div>

  )
}

export default Hero