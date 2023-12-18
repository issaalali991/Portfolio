import React from 'react'
import  './main.css'
export default function Main() {
  return (
    <main className='flex'>
      <section className='flex left-section '>
        <button className=' active'>All Projects</button>
        <button className=''>HTML & CSS</button>
        <button className=''>Java Script</button>
        <button className=''>React</button>
        <button className=''>Node.js</button>

      </section>




      <section className=" flex right-section ">
       {['aa','bb','cc'].map((item =>{
        return(
          <article key={item} className='card '>
          <img width={266} src="./project1.jpeg" alt="" />
          <div style={{width:'266px'}} className=" box">
            <h2 className="title"> Lading Page 2</h2>
            <p className='subtitle'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi incidunt laborum amet cum a.
            </p>
          <div className="flex icons">

            <div style={{gap:'11px'}} className='flex'>
            <div className="icon-link"></div>
            <div className="icon-github"></div>
            </div>


            <a className='link flex' href="#">more 
            <span style={{alignSelf:'end'}} className='icon-arrow-right2'></span>
            </a>
          </div>
          </div>
        </article>
        )
       }))}
      </section>



    </main>
  )
}
