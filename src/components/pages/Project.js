import React from 'react';
import ImageProject1 from "../images/mapped-event-tracker.png";
import ImageProject2 from "../images/financial-statement-analysis.png";
import ImageTechBlog from "../images/tech-blog.png";
import ImageWeather from "../images/weather-dashboard.png";
// import { Image ,Button  ,Row ,Col } from "react-bootstrap";

export default function Project() {
  return (
    <div>
      <h3 className="text-center text-color">My Work</h3>
      <div className="container justify-start">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="mycard">
              <a href="https://skerans.github.io/Mapped-event-tracker/"><img className="img-class" src={ImageProject1} alt="Mapped Event Tracker" /></a>
              <a href="https://github.com/skerans/Mapped-event-tracker"><h4>Project: Mapped Event Tracker</h4></a>
              <h6>Server-Side-APIs</h6>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm- row-cols-md-2 row-cols-lg-2">
          <div className="col">
            <div className="mycard">
              <a href="https://financial-analysis-project-du.herokuapp.com/"><img className="img-class" src={ImageProject2} alt="Financial Statement Analysis" /></a>
              <a href="https://github.com/Nara1469/financial-statement-analysis"><h4>Project: Financial Statement Analysis</h4></a>
              <h6>MERN Stack</h6>
            </div>
          </div>
          <div className="col">
            <div className="mycard">
              <a href="https://the-tech-blog-mvc-structure.herokuapp.com/"><img className="img-class" src={ImageTechBlog} alt="Tech Blog" /></a>
              <a href="https://github.com/Nara1469/mvc-tech-blog"><h4>The Tech Blog</h4></a>
              <h6>Model-View-Controller</h6>
            </div>
          </div>
          <div className="col">
            <div className="mycard">
              <a href="https://nara1469.github.io/weather-app/"><img className="img-class" src={ImageWeather} alt="Weather Dashboard" /></a>
              <a href="https://github.com/Nara1469/weather-app"><h4>Weather App</h4></a>
              <h6>Server-Side-API</h6>
            </div>
          </div>
          <div className="col">
            <div className="mycard">
              <a href="https://fsa-ratio.herokuapp.com/"><img className="img-class" src={ImageProject2} alt="Financial Statement Ratio Analysis" /></a>
              <a href="https://github.com/ebattani/Financial-Statement-Ratio-Analysis"><h4>Project: Financial Statement Ratio Analysis</h4></a>
              <h6>MVC Paradigm Full Stack</h6>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
