import React from 'react'
import HomePage from './pages/homepage.component';
import Navbar from './components/navbar.component';
import { Routes, Route, Link } from "react-router-dom";
import { Signin } from './pages/Sign-in-and-sign-up.jsx/signin';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage name={'Tobias Ulander'} proffesion={'Web Developer'} />} />
        <Route path='contact' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App;
