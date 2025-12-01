import React from 'react'
import "./Creative.css"
import { useTranslation } from 'react-i18next';
const Creative = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="container">
                <div className="creative d-flex align-items-center mt-5">
                <div className="creative-left">
                    <h2>{t("group")}</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</h6>
                </div>
                <div className="creative-right">
                    <img src="/images/Know more image.png" alt="" />
                </div>
            </div>
                </div>
        </>
    )
}

export default Creative