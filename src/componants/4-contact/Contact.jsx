import React from 'react'
import  './contact.css'
import  { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';

 
export default function Contact() {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o8lv3oa', 'template_of5j7dd', form.current, '4Hm-idbLD3okpEGJW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section className='contact-us'>
      <h2 className='title'>
        <span className='icon-envelop'>     
        </span>
        Contact us
      </h2>
      <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore debitis incidunt assumenda?</p>


      <div className="  flex">
        <form ref={form} action="" onSubmit={sendEmail}>
          <div className='flex'>
            
          <label htmlFor="email">Email Adress : </label>
          <input  type="email" name="email" id='email' required />
          </div>

          <div className='flex' style={{marginTop:'24px'}}>
          <label htmlFor="message">Your message:</label>
          <textarea name="message" id="message" required></textarea>
          </div>
          <button className='submit'>Submit</button>
        </form>

        <div className="animation"></div>
      </div>
    </section>
  )
}
