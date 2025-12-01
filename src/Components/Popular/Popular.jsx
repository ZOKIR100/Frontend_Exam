import React, { useState } from 'react'
import "./Popular.css"
import { useTranslation } from 'react-i18next';
const Popular = () => {
      const { t } = useTranslation();
    return (
        <>
            <div className="container">
                <div className="popular-text">
                    <h2>{t("popular")}</h2>
                </div>
                <div className="popular-cards d-flex mt-5 ">
                    <div className="popular-card">
                        <img src="/images/f36aceb1331b3b8ac3a1d67fcd41a038e1383b54.png" alt="" />
                        <h4>{t("john")}</h4>
                        <h3>{t("study")}</h3>
                        <p>{t("fugiat")}</p>
                    </div>
                    <div className="popular-card">
                        <img src="/images/1c9dc67a009ea3ac2018c459ce84161d1b88796f (1).png"/>
                        <h4>{t("john")}</h4>
                        <h3>{t("study")}</h3>
                        <p>{t("fugiat")}</p>
                    </div>
                    <div className="popular-card">
                        <img src="/images/0624fa8156d20f4f437855e425ccde79eec2a93c.png" alt="" />
                        <h4>{t("john")}</h4>
                        <h3>{t("study")}</h3>
                        <p>{t("fugiat")}</p>
                    </div>
                </div>
                    <div className="line_one"></div>    
            </div>
        </>
    )
}

export default Popular