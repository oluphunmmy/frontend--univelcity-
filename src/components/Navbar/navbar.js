import React, { useEffect, useState } from 'react'
import '../Navbar/navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link} from 'react-scroll'; 

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`} >
        <img src={logo} alt='' className='logo' />
        <ul>
        <li><Link to='' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='' smooth={true} offset={0} duration={500}>Program</Link></li>
            <li><Link to='' smooth={true} offset={0} duration={500}>Program</Link>About Us</li>
            <li><Link to='' smooth={true} offset={0} duration={500}>Program</Link>Campus</li>
            <li><Link to='' smooth={true} offset={0} duration={500}>Program</Link>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>

          </ul>
          <img src={menu_icon} alt='' className='menu-icon'/>
    </nav>

  )
}
export default Navbar