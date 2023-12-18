import Header from './componants/1-header/Header'
import Hero from './componants/2-hero/Hero'
import Main from './componants/3-main/Main'
import Contact from './componants/4-contact/Contact'
import Footer from './componants/5-footer/Footer'

function App() {

  return (
    <div id='up' className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
      <a href="#up">
      <button className='scroll2top icon-keyboard_arrow_up'></button>
      </a>
    </div>
  )
}

export default App
