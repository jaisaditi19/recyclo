import React from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Registration from './components/RegistrationForm/Registration';



const App = () => {
  return (
    <Router>
      <Navbar/>
  
      <Routes>
        <Route path="/register" exact element={<Registration/>}/>
        
        <Route path="/" exact element={<Homepage/>}/>
      </Routes>
      <Footer />
      
    </Router>
    
  )
}

export default App;