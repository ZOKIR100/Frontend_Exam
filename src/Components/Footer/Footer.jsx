import React, { useState } from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("lang") || "ru");

    const changeLang = (lg) => {
        i18n.changeLanguage(lg);
        localStorage.setItem("lang", lg);
        setLang(lg);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="footer mt-5">
            <div className="container footer-container">

                <button className="scroll-to-top" onClick={scrollToTop} aria-label="Tepaga chiqish">
                    <span><img src="/images/Group 164.png" style={{ overflow: "hidden" }} alt="" /></span>
                </button>

                <div className="footer-copyright">
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com 020 7993 2905</p>
                </div>
                <div className="icon_two">
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;