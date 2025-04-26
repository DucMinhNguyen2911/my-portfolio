import React, {useState} from "react"
import "./header.css"
function Header() {
    const[Toggle,showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container_">
                <a href="index.html" className="nav__logo">Dum1</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid_">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link hover:underline">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link hover:underline">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link hover:underline">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>



                        {/* <li className="nav__item">
                            <a href="#projects" className="nav__link hover:underline">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Projects
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#contact" className="nav__link hover:underline">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() =>showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() =>showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;