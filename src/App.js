import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FormPage from "./components/FormPage/FormPage.js"
import  Database  from "./components/Database.js"
import  Home  from "./components/Home/Home"
import NavbarMain from './components/NavbarMain/NavbarMain'
import HeroSection from './components/Home/Hero/HeroSection.js';

function App() {
  return (
    <BrowserRouter>
      <NavbarMain />
  
      <Routes>
        <Route path="/form" element={<FormPage />} />
        <Route path="/database" element={ <Database /> } />
        <Route path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>

  );
}

export default App;
