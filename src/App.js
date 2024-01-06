import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import Contatos from './components/pages/Contatos'
import Sobre from './components/pages/Sobre'
import Proposta from './components/pages/Proposta'
import Propostas from './components/pages/Propostas'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
function App() {
  return (
    <Router>
      <Container customClass="min-height">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Inicio />}></Route>
          <Route exact path='/sobre' element={<Sobre />} />
          <Route exact path='/contato' element={<Contatos />} />
          <Route exact path='/novo-cliente' element={<Proposta />} />
          <Route exact path='/propostas' element={<Propostas />} />
        </Routes>
        <Footer />
      </Container>
    </Router >

  );
}

export default App;
