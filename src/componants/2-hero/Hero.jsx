import Lottie from 'lottie-react';
import './hero.css'
import devAnimation from '../../../src/animation/developer.json'
import { useRef } from 'react';
export default function Hero() {
  const lottieRef=useRef();
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



      <div className="right-section animation ">
      <Lottie className='dev-animation' onLoadedImages={()=>{
          // @ts-ignore
          lottieRef.current.setSpeed(0.5);
      }} animationData={devAnimation} style={{ height: '350px' }}/>
      </div>
    </section>
  )
}
