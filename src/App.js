import React from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sell from "./components/SellForm/Sell";
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/sell" exact element={<Sell/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;