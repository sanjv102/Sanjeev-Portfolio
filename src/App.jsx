import React from 'react'
import {HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HashRouter >
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App