import React, { useState } from 'react'
import "./Startup.css"
import { useTranslation } from 'react-i18next';
const Startup = () => {
   const { t } = useTranslation();
          
  
  return (
    <>
      <div className="background">
        <div className="container start-container">
            <div className="start">
            <h3>{t("post")} </h3>
            <h1>{t("step")}</h1>
            <span className='west'>{t("james")}</span>
            <p className='dolor'>{t("fugiat")}</p>
            <button className='read'>{t("read")}</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Startup