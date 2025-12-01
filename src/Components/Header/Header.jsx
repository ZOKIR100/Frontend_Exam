import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Header = () => {
    const [lang, setLang] = useState(localStorage.getItem("lang") || "uz")
    const { t, i18n } = useTranslation();
    const changeLanguage = (lg) => {
        i18n.changeLanguage(lg)
        localStorage.setItem("lang", lg)
        setLang(lg)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className={`nav-link ({isActive})=>isActive?"nav-link active:""`}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/link" className="nav-link">Link</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/disabled" className="nav-link">Disabled</NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink to="/service" className="nav-link">Service</NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink to="/hero" className="nav-link">Hero</NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink to="/disabled" className="nav-link">Disabled</NavLink>
                            </li>
                        </ul>
                         <div className="dropdown d-flex align-items-center">
                                {/* {localStorage.getItem("lang")} */}
                            <button className={lang === "uz" ? "active-lang" : ""} onClick={() => changeLanguage("uz")}>UZ</button>
                                <div className="line"></div>
                            <button  className={lang === "ru" ? "active-lang" : ""} onClick={() => changeLanguage("ru")}>RU</button>
                                <div className="line"></div>
                            <button  className={lang === "en" ? "active-lang" : ""} onClick={() => changeLanguage("en")}>EN</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header