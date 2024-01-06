import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../../src/animation/developer.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function Hero() {
  const lottieRef = useRef();

  const { t } = useTranslation();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avater flex">
          <img src="./issa.png" className="avater" alt="" />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="title"
          style={{ minHeight: "51px" }}
        >
          <b>Issa Alali</b> <br /> Full Stack {t("Developer")}
        </motion.h1>
        <p className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione in
          nam dolor quae? Expedita nulla unde, ex esse perspiciatis totam?
        </p>
        <div className="icons flex">
          <a
            className="icon icon-envelop"
            href="mailto:issa.alali.991@gmail.com"
            target="_blank"
          ></a>
          <a
            className="icon icon-github"
            href="https://github.com/issaalali991"
            target="_blank"
          ></a>
          <a
            className="icon icon-linkedin2"
            href="https://www.linkedin.com/in/isali91/"
            target="_blank"
          ></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          className="dev-animation"
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
          style={{ height: "350px" }}
        />
      </div>
    </section>
  );
}
