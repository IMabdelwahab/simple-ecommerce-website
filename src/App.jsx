import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className='text-2xl'>HOME</div>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
