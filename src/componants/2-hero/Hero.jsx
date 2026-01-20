
import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/developer.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const lottieRef = useRef();
  const { t } = useTranslation();

  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avater flex">
          <img src="./issa.png" className="avater" alt="Issa Alali Profile" />
          <div className="icon-verified" aria-label="Verified"></div>
        </div>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="title"
          style={{ minHeight: "51px" }}
        >
          <b>Issa Alali</b> <br />
          Junior Full Stack Web {t("Developer")}
        </motion.h1>
        <p className="sub-title"></p>
        <div className="icons flex">
          <a
            className="icon icon-envelop"
            href="mailto:issa.alali.991@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
          ></a>
          <a
            className="icon icon-github"
            href="https://github.com/issaalali991"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          ></a>
          <a
            className="icon icon-linkedin2"
            href="https://www.linkedin.com/in/isali91/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          ></a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className="dev-animation"
          animationData={devAnimation}
          style={{ height: "350px" }}
          onComplete={() => {
            if (lottieRef.current) {
              lottieRef.current.setSpeed(0.5);
            }
          }}
        />
      </div>
    </section>
  );
}
