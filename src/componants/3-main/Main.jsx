import { useRef, useState } from "react";
import "./main.css";
export default function Main() {
  const [isActiv1, setIsActiv1] = useState("all");

  const projects = [
    {
      projectTitle: "react project",
      category: ["react", "bootstrap"],
      imgPath: "./project1.jpeg",
    },
    {
      projectTitle: "CSS project",
      category: ["html", "css"],
      imgPath: "./project1.jpe",
    },
  ];

  const [arr, setArr] = useState(projects);
  // function for handle filter
  const handelFilter = (pro) => {
    const newArr = projects.filter((project) => project.category.includes(pro));
    setArr(newArr);
  };
  // -----------------------------
  return (
    <main className="flex">
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
      </section>

      <section className=" flex right-section ">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card ">
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className=" box">
                <h2 className="title"> {item.projectTitle}</h2>
                <p className="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore eligendi incidunt laborum amet cum a.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="#">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right2"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
