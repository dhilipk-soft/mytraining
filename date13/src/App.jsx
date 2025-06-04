import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import HeroContainer from './components/Heros/HeroContainer.jsx'
import BodyController from './Controller/BodyController.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer\'/Footer.jsx'
import FlightBody from './components/Body/FlightBody.jsx'
import FlightHeroContainer from './components/FlightHeroContainer/FlightHeroConainer.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <div className="appcontainer">
        <NavBar  />
      </div>      
      <div className="body">
        <Routes>
          <Route path='/' element={
            <div className='bodycontainer'>
              <div className="heroheader">
                <HeroContainer />
              </div>
              <div className="herobottom">
                <Body  />
              </div>
              
            </div>} />
          <Route path='/flights' element={
            <div className='bodycontainer'>
              <div className="heroheader">
                <FlightHeroContainer />
              </div>
              <div className="herobottom">
                <FlightBody  />
              </div>
            </div>
            } />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
