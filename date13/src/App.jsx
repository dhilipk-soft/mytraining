import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import HeroContainer from './components/Heros/HeroContainer.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer\'/Footer.jsx'

function App() {

  return (
    <div className="App">
      <div className="appcontainer">
        <NavBar />
        <HeroContainer />
      </div>      
      <div className="body">
        <Body />
      </div>
      <div className="footer">
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
