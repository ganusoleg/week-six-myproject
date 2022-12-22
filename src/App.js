import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import ContactUs from "./ContactUs";
import './App.css';

function App() {
  return <Router>
   <nav>
    <Link to="/" className="link">Главная</Link>
    <Link to="/shop" className="link">Магазин</Link>
    <Link to="/team" className="link">Наша команда</Link>
    <Link to="/about" className="link">О нас</Link>
    <Link to="/contactus" className="link">Контакты</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
  </Routes>
  </Router>
}

export default App;