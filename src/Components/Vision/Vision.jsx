import React from 'react'
import "./Vision.css"
import { useTranslation } from 'react-i18next';
const Vision = () => {
    const { t } = useTranslation();
  return (
    <>
    <div className="pink">
        <div className="container">
            <div className="vision d-flex gap-5">
                <div className="left">
                    <h3>{t("vision")}</h3>
                    <h2>{t("content")}</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h6>
                </div>
                <div className="right">
                    <h3>{t("mision")}</h3>
                    <h2>{t("improve")}</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h6>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Vision