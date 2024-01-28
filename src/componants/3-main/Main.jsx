import { useRef, useState } from "react";
import "./main.css";
import { projects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
export default function Main() {
  const [isActiv1, setIsActiv1] = useState("all");

  const [arr, setArr] = useState(projects);

  // function for handle filter
  const handelFilter = (pro) => {
    const newArr = projects.filter((project) => project.category.includes(pro));
    setArr(newArr);
  };
  // -----------------------------
  return (
    <main className="flex" id="projects">
      <section className="flex left-section">
        <button
          className={isActiv1 === "all" ? "active" : ""}
          onClick={() => {
            setIsActiv1("all");
            setArr(projects);
          }}
        >
          All Projects
        </button>

        <button
          className={isActiv1 === "html" ? "active" : ""}
          onClick={() => {
            setIsActiv1("html");
            handelFilter("html");
          }}
        >
          HTML & CSS
        </button>

        <button
          className={isActiv1 === "javascript" ? "active" : ""}
          onClick={() => {
            setIsActiv1("javascript");
            handelFilter("javascript");
          }}
        >
          Java Script
        </button>

        <button
          className={isActiv1 === "react" ? "active" : ""}
          onClick={() => {
            setIsActiv1("react");
            handelFilter("react");
          }}
        >
          React
        </button>

        <button
          className={isActiv1 === "nodejs" ? "active" : ""}
          onClick={() => {
            setIsActiv1("nodejs");
            handelFilter("nodejs");
          }}
        >
          Node.js
        </button>
        <button
          className={isActiv1 === "java" ? "active" : ""}
          onClick={() => {
            setIsActiv1("java");
            handelFilter("java");
          }}
        >
          Java
        </button>
      </section>

      <section className=" flex right-section ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ duration: 0.5 }}
                key={item.imgPath}
                className="card "
              >
                <img width={266} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className=" box">
                  <h2 className="title"> {item.projectTitle}</h2>
                  <p className="subtitle">
                    {item.description}
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      {/* <div className="icon-link"></div> */}
                      <a className="icon-github" href={item.gitHubLink} target="_blank" rel="noreferrer"
                       ></a>
                    </div>

                    {/* <a className="link flex" href="#">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right2"
                      ></span>
                    </a> */}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
