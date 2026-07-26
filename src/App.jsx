import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function DiagnosticHome() {
  return (
    <div style={{ padding: "50px", textAlign: "center", color: "white" }}>
      <h1>🎉 Router Connection Successful!</h1>
      <p>If you can see this text, your GitHub Pages deployment and layout configurations are working flawlessly.</p>
    </div>
  );
}


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App