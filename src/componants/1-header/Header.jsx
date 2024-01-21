import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import "./header.css";
import LanguageSwitcher from "../../componants/LanguageSwitcher";


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

  const { t } = useTranslation();



  

  return (
    <header className="flex">
      <button className="menu icon-menu" onClick={() => setShowmodal(true)} />
      <div />
     
      <nav>
        <ul className="flex">
        <li>
            <a href="">{t('Home')}</a>
          </li>
          <li>
            <a href="#about">{t('About')}</a>
          </li>
          <li>
            <a href="#projects">{t('Projects')}</a>
          </li>
          <li>
            <a href="#contact">{t('Contact')}</a>
          </li>
        </ul>
      </nav>
      <div className="flex lang-mode">
      <LanguageSwitcher  />
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
      </button></div>
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
            <a href="">{t('Home')}</a>
          </li>
          <li>
            <a href="#about" onClick={() => setShowmodal(false)}>{t('About')}</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setShowmodal(false)}>{t('Projects')}</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setShowmodal(false)}>{t('Contact')}</a>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
}
