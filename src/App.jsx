import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/Sanjeev-Portfolio' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App