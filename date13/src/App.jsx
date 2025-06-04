import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import HeroContainer from './components/Heros/HeroContainer.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer\'/Footer.jsx'
import FlightHeroContainer from './components/FlightHeroContainer/FlightHeroConainer.jsx'

function App() {

  const [activeDashboard, setActiveDashboard] = useState("stays")


  return (
    <div className="App">
      <div className="appcontainer">
        <NavBar setActiveDashboard={setActiveDashboard} />
        {
          activeDashboard === "flights" && <FlightHeroContainer />
        }
        {
          activeDashboard === "stays" && <HeroContainer />
        }
      </div>      
      <div className="body">
        <Body />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
