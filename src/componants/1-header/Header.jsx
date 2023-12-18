import React, { useRef, useState } from "react";
import "./header.css";
export default function Header() {
  const [showmodal,setShowmodal]=useState(false)
  return (
    <header className="flex">
      <button className="menu icon-menu" onClick={()=>setShowmodal(true)}/>
      <div />


      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode">
      <span className="icon-moon"></span></button>
      {showmodal&& (
        <div className="fixed">
        <ul className=" modal">
           <li><button className="icon-cancel" onClick={()=> setShowmodal(false)}/></li>
           <li><a href="">About</a></li>
           <li><a href="">Articles</a></li>
           <li><a href="">Prpjects</a></li>
           <li><a href="">Speaking</a></li>
           <li><a href="">Uses</a></li>
         </ul>
     </div>
      ) }
    </header>
  );
}
