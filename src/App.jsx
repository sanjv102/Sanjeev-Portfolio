import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HashRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App