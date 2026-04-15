import { useState } from 'react'
import Sobre from './Sobre.jsx'
import Header from './Header.jsx'
import Contato from './Contato.jsx'
import Home from './Home.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
