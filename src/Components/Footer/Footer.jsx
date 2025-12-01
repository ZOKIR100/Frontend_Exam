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
            <div className="footer-container">
                {/* Logo */}
                <div className="footer-logo d-flex justify-content-between">
                    <img src="/images/logo (8).png" alt="Leangroup" />
                    <div className="footer-social d-flex gap-4 align-items-center">
                        <a href="#" aria-label="VK"><i className="icon-vk"><img src="/images/vk.png" alt="" /></i></a>
                        <a href="#" aria-label="Facebook"><i className="icon-fb"><img src="/images/fb (1).png" alt="" /></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="icon-linkedin"><img src="/images/linkedin.png" alt="" /></i></a>
                    </div>
                </div>
                <div className="line_"></div>

                {/* Menyu bloklari */}
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>{t("product")}</h4>
                        <ul>
                            <li><a href="#laminate">{t("laminate")}</a></li>
                            <li><a href="#extrusion">{t("extrusion")}</a></li>
                            <li><a href="#packaging">{t("other")}</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>{t("companyone")}</h4>
                        <ul>
                            <li><a href="#about">{t("about us")}</a></li>
                            <li><a href="#team">{t("our team")}</a></li>
                            <li><a href="#certificates">{t("certifacte")}</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>{t("section")}</h4>
                        <ul>
                            <li><a href="#contacts">{t("contacts")}</a></li>
                            <li><a href="#news">{t("news")}</a></li>
                            <li><a href="#vacancies">{t("vacancies")}</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className='belarus'>{t("belarus")}</h4>
                        <p>+375 (17) 270 53 77</p>
                        <p>+375 (17) 270 53 78</p>
                        <br />
                        <h4 className='belarus'>{t("moskva")}</h4>
                        <p>+7 (495) 280 73 44</p>
                        <p>+7 (495) 280 73 44</p>
                    </div>

                    <div className="footer-column">
                        <h4 className='belarus'>{t("euro")}</h4>
                        <p>+48 73 1111 044</p>
                        <br />
                        <h4 className='belarus'>{t("ekatin")}</h4>
                        <p>+7 (343) 346 82 06</p>
                    </div>
                </div>

                <button className="scroll-to-top" onClick={scrollToTop} aria-label="Tepaga chiqish">
                    <span><img src="/images/Group 164.png" style={{ overflow: "hidden" }} alt="" /></span>
                </button>

                <div className="footer-copyright">
                    <p>© 2022 Leangroup. All Rights Reserved.</p>
                    <p>Разработка и продвижение сайтов SkyWeb.by</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;