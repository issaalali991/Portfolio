import React, { useEffect, useRef, useState } from "react";
import "./header.css";
export default function Header() {
  const [showmodal, setShowmodal] = useState(false);
  const [them, setThem] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [them]);
  return (
    <header className="flex">
      <button className="menu icon-menu" onClick={() => setShowmodal(true)} />
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
      <button
        className="mode"
        onClick={() => {
          //send value to LS
          localStorage.setItem(
            "currentMode",
            them == "dark" ? "light" : "dark"
          );
          //get value from LS
          setThem(localStorage.getItem("currentMode"));
        }}
      >
        <span className={them=='dark' ?"icon-moon": 'icon-sun'}></span>
      </button>
      {showmodal && (
        <div className="fixed">
          <ul className=" modal">
            <li>
              <button
                className="icon-cancel"
                onClick={() => setShowmodal(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Prpjects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
