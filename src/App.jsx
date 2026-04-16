import { Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Sobre from './Sobre.jsx'
import Contato from './Contato.jsx'

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          {/* Define qual ficheiro abrir em cada link */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </>
  )
}

export default App