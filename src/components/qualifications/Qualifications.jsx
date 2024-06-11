import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qual section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Co-Curricular Journey</span>

      <div className="qual__container container">
        <div className="qual__tabs">
          <div
            className={
              toggleState === 1
                ? "qual__button button--flex qual__active"
                : "qual__button button--flex"
            }
            onClick={()=>{
                toggleTab(1)
            }}
          >
            <i className="uil uil-graduation-cap qual__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qual__button button--flex qual__active"
                : "qual__button button--flex"
            }
            onClick={()=>{
                toggleTab(2);
            }}
          >
            <i class="uil uil-desktop-cloud-alt qual__icon"></i>
            {/* <i className="uil uil-award qual__icon"></i> */}
            Experiences
          </div>
        </div>

        <div className="qual__sections">
          <div
            className={
              toggleState === 1
                ? "qual__content qual__content-active"
                : "qual__content"
            }
          >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                  M.E., Industrial Safety Engineering 
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                KSR College of Engineering 
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  8.67 CGPA
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2023
                </div>
                
              </div>

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>

              <div>
                <h3 className="qual__title">
                  B.E., Mechanical Engineering
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                Kongu Engineering College
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  6.78 CGPA
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2020
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                  Higher Secondary Schooling (HSC)
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                SKV Matriculation Higher Secondary School
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  80.67%
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2015 - 2016
                </div>
              </div>

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                {/* <span className="qual__line"></span> */}
              </div>

              <div>
                <h3 className="qual__title">
                  Secondary Schooling (SSLC)
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                SKV Matriculation Higher Secondary School
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  95.8 %
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2013 - 2014
                </div>
              </div>
            </div>
          </div>

          

          {/* 2 */}
          <div className={
              toggleState === 2
                ? "qual__content qual__content-active"
                : "qual__content"
            }
            
            >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                Junior Software Developer - Kanavu Startup Village
                </h3>
                <span className="qual__subtitle">
                <i class="uil uil-map-marker grade"></i>
                {/* <i className="uil uil-university grade"></i> */}
                Erode</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Mar 2023- Present
                </div>
              </div>

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
            <div></div>
              <div>
                <span className="qual__rounder"></span>
                {/* <span className="qual__line"></span> */}
              </div>
              <div>
                <h3 className="qual__title">
                Full Stack Developer Internship -  Full Creative Technologies Pvt Ltd
                </h3>
                <span className="qual__subtitle">
                <i class="uil uil-map-marker grade"></i>
                {/* <i className="uil uil-university grade"></i> */}
                Chennai</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Apr 2023- Jun 2023
                </div>
              </div>

              
            </div>

            {/* <div className="qual__data">
              

              <div>
                <h3 className="qual__title">
                  The Complete Node.js Developer Course (3rd Edition)
                </h3>
                <span className="qual__subtitle"><i className="uil uil-university grade"></i>Udemy</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>
       

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div> */}

              {/* <div>
                <span className="qual__rounder"></span>
               
              </div> */}

              {/* <div>
                <h3 className="qual__title">
                React - The Complete Guide (incl Hooks, React Router, Redux)
                </h3>
                <span className="qual__subtitle"><i className="uil uil-university grade"></i>Udemy</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
