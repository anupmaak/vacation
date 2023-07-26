import React,  { useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarBooking from './CarBooking';
import Register from './Register';
import ShowBooking from './ShowBooking';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/createAccount' exact={true} element={<Register/>}/>
        <Route path='/booking' element={<CarBooking/>}/>
        <Route path='/showBooking' element={<ShowBooking/>}/>
      </Routes>
    </Router>
  )
}

export default App;