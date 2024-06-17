import React from 'react'
import Navbar from './Components/Navbar'
import MainScreen from './screens/MainScreen'
import AboutUs from './screens/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/MainScreen" element={<MainScreen/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />

     
    </Routes>
  </Router>
  )
}
