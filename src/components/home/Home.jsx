import React from "react"
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import SemiCircle from "../../assets/semi circle.svg";
import Circle from "../../assets/circle.svg";
import Squiggly from "../../assets/squiggly.svg";
import Triangle from "../../assets/triangle.svg";

function Home(){
    const scaleFactor = 1 / 20;
    function moveBackground(event) {
        const shapes = document.querySelectorAll(".shape");
        const x = event.clientX * scaleFactor;
        const y = event.clientY * scaleFactor;
      
        for (let i = 0; i < shapes.length; ++i) {
          const isOdd = i % 2 !== 0;
          const boolInt = isOdd ? -1 : 1;
          shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
        }
      };
    return (
        <section className="home section" id="home" onMouseMove={event => moveBackground(event)}>
            <div className="home__container container_ grid_">
                <div className="home__content grid_">
                    <Social />

                    <div className="home__img"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
            <img src={SemiCircle} className="shape shape--0" alt=""/>
            <img src={Circle} className="shape shape--1" alt=""/>
            <img src={Squiggly} className="shape shape--2" alt=""/>
            <img src={Circle} className="shape shape--3" alt=""/>
            <img src={Triangle} className="shape shape--4" alt=""/>
            <img src={Circle} className="shape shape--5" alt=""/>
            <img src={Squiggly} className="shape shape--6" alt=""/>
            <img src={Circle} className="shape shape--7" alt=""/>
            <img src={SemiCircle} className="shape shape--8" alt=""/>
        </section>
    )
}

export default Home;