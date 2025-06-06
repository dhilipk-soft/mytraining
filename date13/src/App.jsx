import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import HeroContainer from './components/Heros/HeroContainer.jsx'
import BodyController from './Controller/BodyController.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer\'/Footer.jsx'
import FlightBody from './components/Body/FlightBody.jsx'
import FlightHeroContainer from './components/FlightHeroContainer/FlightHeroConainer.jsx'
import SignPage from './Pages/SignPage.jsx'
import Top from './components/NavBar/Top.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <div className="appWrapper">
        <div className="appheader">
          <Top />
        </div>  
        <div className="appcontainer">       
        </div>      
        <div className="bodyB">
          <Routes>
            <Route path='/' element={
              <div className='bodycontainer'>
                <div className="heroheader">
                  <NavBar  />
                  <HeroContainer />
                </div>
                <div className="herobottom">
                  <Body  />
                </div>
                
              </div>} />
            <Route path='/flights' element={
              <div className='bodycontainer'>
                <div className="heroheader">
                  <NavBar  />
                  <FlightHeroContainer />
                </div>
                <div className="herobottom">
                  <FlightBody  />
                </div>
              </div>
              } />

            <Route path='/login' element={<SignPage />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
  )
}

export default App
