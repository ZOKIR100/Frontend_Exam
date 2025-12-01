import React from 'react'
import "./Global.css"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import PageTitle from './Components/PageTitle'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import AboutUs from './Pages/AboutUs'
import Register from './Pages/Register'
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<> <PageTitle title="Home|Page"/> <Home/> </>}/>
        <Route path='/blog' element={<> <PageTitle title="Blog|Page"/> <Blog/></>}/>
         <Route path='/about us' element={<> <PageTitle title="About Us|Page"/> <AboutUs/></>}/>
          <Route path='/register' element={<> <PageTitle title="Register|Page"/> <Register/></>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App