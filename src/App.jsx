import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter,Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// pages
import Auth from './pages/Auth.jsx'
import Home from './pages/Home.jsx'
import Checkout from './pages/Checkout.jsx'
import NotFound from './pages/NotFound.jsx'
// components
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'




function App() {
  const arr = ["abdo","zenn","niiit"]

  return (
    <div className=''>
      <BrowserRouter>
        <NavBar arr={arr}/> {/* use the navbar inside of the bowser router to be able to use the Link component */}
        <Routes>
          <Route path='/auth' element={<Auth className=""/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<Checkout/>}/>

          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        {/* <Footer arr={arr}/> */}
      </BrowserRouter>
    </div>
  )
}

export default App