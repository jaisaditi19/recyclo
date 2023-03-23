import React from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sell from "./components/SellForm/Sell";
import Footer from './components/footer/Footer';
import AuthContextProvider from "./context/AuthContext";
import Signin from "./components/signin/Signin";
import Signup from "./components/signin/Signup";
import Account from "./components/signin/Account";
import ProtectedRoute from "./components/signin/ProtectedRoute";


const App = () => {
  return (
    <Router>
      <AuthContextProvider >
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/sell" exact element={<Sell/>}/>
        <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }/>
      </Routes>
      <Footer/>
      </AuthContextProvider>

    </Router>
  )
}

export default App;