import React from 'react'
import "./Registr.css"
import { useTranslation } from 'react-i18next';
const Registr = () => {
    const { t } = useTranslation();
  return (
    <div className="container">
         <form className='form d-grid '>

            <h1 className='text-reg text-dark '>{t("registr")}</h1>

                <input className='input' type="text" name="firstname" placeholder={t("name")} />

                <input className='input' type="text" name="lastname" placeholder={t("last")} />

                <input className='input' type="text" name="username" placeholder={t("user")} />

                <input className='input' type="password" name="password" placeholder={t("code")} />

                <input className='input' type="password" name="confirm_password" placeholder={t("codee")} /> 

                <button className='registe'>{t("registr")}</button>
        </form>
    </div>
  )
}

export default Registr