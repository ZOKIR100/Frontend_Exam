import React from 'react'
import "./Team.css"
import { useTranslation } from 'react-i18next';
const Team = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="container">
                <div className="team d-flex align-items-center gap-5">
                <div className="team-left">
                    <img src="/images/Image (16).png" alt="" />
                </div>
                <div className="team-right">
                    <h2>{t("started")}</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</h6>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Team