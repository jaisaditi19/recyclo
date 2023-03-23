import React from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sell from "./components/SellForm/Sell";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/sell" exact element={<Sell/>}/>
      </Routes>
    </Router>
  )
}

export default App;