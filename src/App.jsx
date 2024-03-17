import './App.css'
import Header from './components/Header'
import About from './pages/About';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <div className='page-container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
