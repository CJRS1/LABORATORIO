import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Routes>

        <Route path="" element={
          <>
            <Carousel />
          </>
        } />

        {/* <Route path="/registrarse-p1" element={<Registro />} /> */}

      </Routes>

      <Footer />
      {/* <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer">
        <img src={require('../src/images/LogoRedesSociales/Whatsapp.png')} alt='Whatsapp' height={'80px'} width={'80x'} className="whatsapp-icon" />
      </a> */}
    </Router>
  );
}

export default App;
