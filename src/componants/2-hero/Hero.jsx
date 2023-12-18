import React from 'react'
import './hero.css'
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className='left-section '>
        <div className="parent-avater flex">
          <img src="./issa.png" className='avater' alt=""  />
          <div className='icon-verified'></div>
        </div>


        <h1 className='title'>Web Developer</h1>
        <p className='sub-title'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione in nam dolor quae? Expedita nulla unde, ex esse perspiciatis totam?
        </p>
        <div className="icons flex">
          <div className="icon icon-envelop"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin2"></div>
        </div>
      </div>



      <div className="right-section animation border">
        left
      </div>
    </section>
  )
}
