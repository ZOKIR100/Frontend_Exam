import React from 'react'
import "./Category.css"
import { useTranslation } from 'react-i18next';
const Category = () => {
   const { t } = useTranslation();
  return (
    <>
        <div className="container">
          <div className="category-text">
            <h2>{t("choose")}</h2>
          </div>
            <div className="categories d-flex gap-4 mt-5">
                <div className="category">
                  <div className="icon">
                    <img src="/images/Icon (7) (1).png" alt="" />

                  </div>
                    <h3>{t("business")}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                 <div className="category">
                  <div className="icon">
                    <img className='raketa' src="/images/Icon (8).png" alt="" />
                  </div>
                    <h3>{t("start")}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                 <div className="category">
                  <div className="icon">
                    <img src="/images/icon (9).png" alt="" />
                  </div>
                    <h3>{t("economy")}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                 <div className="category">
                  <div className="icon">
                    <img src="/images/business-and-trade 1.png" alt="" />
                  </div>
                    <h3>{t("technology")}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Category