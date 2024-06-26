
import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import doneAnimation from '../../../src/animation/done.json';
import contactAnimation from '../../../src/animation/contact-us.json'

import { useTranslation } from 'react-i18next'; 

export default function Contact() {
  const { t } = useTranslation(); 

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setIsButtonDisabled(true); 

    emailjs
      .sendForm('service_e4douth', 'template_of5j7dd', form.current, '4Hm-idbLD3okpEGJW')
      .then(
        (result) => {
          setIsSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitted(false);
        }
      )
  };

  return (
    <section className="contact-us" id='contact'>
      
      <h2 className="title">
        <span className="icon-envelop"></span>
        {t('Contact us')}
      </h2>
      <p className="sub-title">
        {t('Feel free to reach out to us with any questions or inquiries.')}
      </p>

      <div style={{ justifyContent: 'space-between' }} className="flex">
      <form ref={form} action="" onSubmit={sendEmail}>
  <div className="flex">
    <label htmlFor="email">{t('Email Address')}:</label>
    <input type="email" name="email" id="email" required />
  </div>

  <div className="flex" style={{ marginTop: '24px' }}>
    <label htmlFor="message">{t('Your message')}:</label>
    <textarea name="message" id="message" required></textarea>
  </div>

  <button className="submit" disabled={isButtonDisabled}>
    {t('Submit')}
  </button>

  {isSubmitted && (
    <div className="success-message flex">
      <Lottie loop={false} style={{ height: '33px' }} animationData={doneAnimation} />
      <span>{t('Message is submitted')}</span>
    </div>
  )}
</form>
<div className="animation">
          <Lottie className='contact-animation' animationData={contactAnimation} style={{ height: '350px' }} />
        </div>
      </div>
    </section>
  );
}