import './App.css'
import Header from './components/Header'
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/auth" element={<Header />} />
          <Route path="/note/:id" element={<Header />} />
          <Route path="*" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
