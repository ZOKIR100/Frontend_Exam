import React from 'react'
import "./Blogswiper.css"
import { useTranslation } from 'react-i18next';

const Blogswiper = () => {
     const { t } = useTranslation();
    return (
        <>
            <div className="container">
                <div className="blog-swiper mt-5">
                <div className="swiper d-flex mb-4">
                    <div className="img">
                    <img style={{width:"445px", height:"300px"}} src="/images/f36aceb1331b3b8ac3a1d67fcd41a038e1383b54.png" alt="" />
                    </div>
                    <div className="business-text">
                    <h3>{t("business")}</h3>
                    <h2>{t("free")}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                    </div>
                </div>
                 <div className="swiper d-flex mb-4">
                    <div className="img">
                    <img style={{width:"445px", height:"300px"}} src="/images/f36aceb1331b3b8ac3a1d67fcd41a038e1383b54.png" alt="" />
                    </div>
                    <div className="business-text">
                    <h3>{t("business")}</h3>
                    <h2>{t("free")}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                    </div>
                </div>
                 <div className="swiper d-flex mb-4">
                    <div className="img">
                    <img style={{width:"445px", height:"300px"}} src="/images/f36aceb1331b3b8ac3a1d67fcd41a038e1383b54.png" alt="" />
                    </div>
                    <div className="business-text">
                    <h3>{t("business")}</h3>
                    <h2>{t("free")}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                    </div>
                </div>
                 <div className="swiper d-flex">
                    <div className="img">
                    <img style={{width:"445px", height:"300px"}} src="/images/f36aceb1331b3b8ac3a1d67fcd41a038e1383b54.png" alt="" />
                    </div>
                    <div className="business-text">
                    <h3>{t("business")}</h3>
                    <h2>{t("free")}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                    </div>
                </div>
                </div>
            </div>
        </ >

  )
}

export default Blogswiper