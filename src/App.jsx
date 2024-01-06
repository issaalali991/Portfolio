import { useEffect, useState, useRef  } from 'react'
import Header from './componants/1-header/Header'
import Hero from './componants/2-hero/Hero'
import Main from './componants/3-main/Main'
import Contact from './componants/4-contact/Contact'
import Footer from './componants/5-footer/Footer'
import emailjs from '@emailjs/browser';
import About from './componants/about/About'

function App() {
  const [showscroll,setShowScroll]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>300){
            setShowScroll(true);
        }
        else setShowScroll(false);
    })
  },[])
  // const gotoUp= ()=>{
  //   window.scrollY=0;
  // }

  // send message 
  
  return (
    <div id='up' className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <About />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
     
        <a href="#up" style={{opacity:showscroll ? 1 : 0, transition:'0.5s'}}>
        <button className='scroll2top icon-keyboard_arrow_up'  ></button>
        </a>
    
    </div>
  )
}

export default App
