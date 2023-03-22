import React from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
      </Routes>
    </Router>
  )
}

export default App;