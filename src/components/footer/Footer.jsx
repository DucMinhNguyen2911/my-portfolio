import React from "react";
import "./footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container_">
                <h1 className="footer__title">Dum1</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    {/* <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li> */}
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/dum1.pr0" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/dum1.pr0" className="footer__social-link" target="_blank">
                        <i className="uil uil-facebook"></i>
                    </a>
                    <a href="https://github.com/DucMinhNguyen2911" className="footer__social-link" target="_blank">
                        <i className="uil uil-github"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Dum1. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;