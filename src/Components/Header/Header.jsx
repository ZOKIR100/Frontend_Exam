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
        <div className="black">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#"><img src="/images/Logo (9) (1).png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink to="/" className={`nav-link text-white ({isActive})=>isActive?"nav-link active:""`}>{t("home")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link text-white">{t("blog")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about us" className="nav-link text-white text-nowrap">{t("about us")}</NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink to="/register" className="nav-link text-white">{t("registr")}</NavLink>
                            </li>
                            
                            <button className='register'>{t("registr")}</button>
                        </ul>
                         <div className="dropdown d-flex align-items-center gap-2 mx-2">
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
        </div>
        </>
    )
}

export default Header