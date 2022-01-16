import React from 'react'
import HomePage from './pages/homepage.component';
import Navbar from './components/navbar.component';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <HomePage name={'Tobis Ulander'} proffesion={'Web Developer'} />
    </div>
  )
}

export default App;
