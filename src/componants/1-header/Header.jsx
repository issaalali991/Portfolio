import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Header() {
  const [showmodal, setShowmodal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="flex" role="banner">
      <button
        className="menu icon-menu"
        onClick={() => setShowmodal(true)}
        aria-label="Open navigation menu"
      />
      <div />

      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex">
          <li>
            <a href="#up">{t("Home")}</a>
          </li>
          <li>
            <a href="#about">{t("About")}</a>
          </li>
          <li>
            <a href="#projects">{t("Projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("Contact")}</a>
          </li>
        </ul>
      </nav>

      <div className="flex lang-mode">
        <LanguageSwitcher />
        <button
          className="mode"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className={theme === "dark" ? "icon-moon" : "icon-sun"}></span>
        </button>
      </div>

      {showmodal && (
        <div className="fixed" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <ul className="modal">
            <li>
              <button
                className="icon-cancel"
                onClick={() => setShowmodal(false)}
                aria-label="Close navigation menu"
              />
            </li>
            <li>
              <a href="#up" onClick={() => setShowmodal(false)}>
                {t("Home")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setShowmodal(false)}>
                {t("About")}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setShowmodal(false)}>
                {t("Projects")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setShowmodal(false)}>
                {t("Contact")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
