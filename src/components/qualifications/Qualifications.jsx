import React, { useState } from 'react';
import './qualifications.css';

function Qualifications() {
    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>
            <div className="qualification__container container_">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${
                            toggleState === 1 ? 'qualification__active' : ''
                        }`}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{' '}
                        Education
                    </div>

                    <div
                        className={`qualification__button button--flex ${
                            toggleState === 2 ? 'qualification__active' : ''
                        }`}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{' '}
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div
                        className={`qualification__content ${
                            toggleState === 1
                                ? 'qualification__content-active'
                                : ''
                        }`}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Student
                                </h3>
                                <span className="qualification__subtitle">
                                    FPT University (Software Engineer)
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    2021 - 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {
                                    //<span className="qualification__line"></span>}
                                }
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Student
                                </h3>
                                <span className="qualification__subtitle">
                                    High School for Gifted Students, HNUE
                                    (Informatics)
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    2018 - 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`qualification__content ${
                            toggleState === 2
                                ? 'qualification__content-active'
                                : ''
                        }`}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    .NET/ReactJS Developer Fresher
                                </h3>
                                <span className="qualification__subtitle">
                                    Rikkeisoft
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    Apr 2024 - Apr 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {
                                    //<span className="qualification__line"></span>}
                                }
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    .NET Developer Intern
                                </h3>
                                <span className="qualification__subtitle">
                                    FPT Software 
                                    (FHN.GEN)
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    Sep 2023 - Dec 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualifications;
