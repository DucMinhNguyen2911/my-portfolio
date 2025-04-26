import React from "react";
import "./contact.css"

function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>
            <div className="contact__container container_ grid_">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">n.ducminh.work2911@gmail.com</span>
                    <a href="mailto:n.ducminh.work2911@gmail.com" className="contact__button">
                        Write me{" "}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>

                <div className="contact__card">
                    <i className="bx bx-chat contact__card-icon"></i>
                    <h3 className="contact__card-title">Zalo</h3>
                    <span className="contact__card-data">0382700758</span>
                    <a href="https://zalo.me/0382700758" className="contact__button">
                        Write me{" "}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>

                <div className="contact__card">
                    <i className="bx bxl-messenger contact__card-icon"></i>
                    <h3 className="contact__card-title">Messenger</h3>
                    <span className="contact__card-data">dum1.pr0</span>
                    <a href="https://m.me/dum1.pr0" className="contact__button">
                        Write me{" "}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact