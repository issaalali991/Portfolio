import React from 'react'
import  './contact.css'
export default function Contact() {
  return (
    <section className='contact-us'>
      <h2 className='title'>
        <span className='icon-envelop'>     
        </span>
        Contact us
      </h2>
      <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore debitis incidunt assumenda?</p>


      <div className="  flex">
        <form action="">
          <div className='flex'>
          <label htmlFor="email">Email Adress : </label>
          <input type="email" id='email' required />
          </div>

          <div className='flex' style={{marginTop:'24px'}}>
          <label htmlFor="message">Your message:</label>
          <textarea name="" id="message" required></textarea>
          </div>

          <button className='submit'>Submit</button>
        </form>

        <div className="animation"></div>
      </div>
    </section>
  )
}
