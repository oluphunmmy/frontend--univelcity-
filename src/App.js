import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import  Hero from './components/Hero/hero';
import Program from './components/Program/program';
import Title from './components/Title/title';
import About from './components/About/about';
import Campus from './components/Campus/campus';
import Testimonial from './components/Testimonial/testimonial';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import VideoPlayer from './components/VideoPlayer/videoplayer';

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      
      
      
    </div>
  )
}

export default App;