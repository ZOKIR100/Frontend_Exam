import React from 'react'
import "./Busines.css"
import { useTranslation } from 'react-i18next';
const Busines = () => {
     const { t } = useTranslation();
    return (
        <>
            <div className="pink">
                <div className="container">
                    <div className="business">
                        <h2>{t("business")}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                        <h5>
                            Blog
                            <span>&gt;</span>
                            Business
                        </h5>
                    </div>
                </div>
            </div>
                <input className='input' type="text" placeholder='Searching ...' />
        </>
    )
}

export default Busines