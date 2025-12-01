import React from 'react'
import "./Global.css"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import PageTitle from './Components/PageTitle'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/hero' element={<> <PageTitle title="Hero|Page"/> <Hero/> </>}/>
        <Route path='/service' element={<> <PageTitle title="Service|Page"/> <Service/> </>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App