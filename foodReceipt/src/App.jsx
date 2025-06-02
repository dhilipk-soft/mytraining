import { useState } from 'react'
import Header from './components/Header.jsx'
import './main.css'
import Footer from './components/Footer.jsx'
import Body from './components/Body/Body.jsx'
import Control from './components/Control/control.jsx'
import Router from './components/Routes/Router.jsx'

function App() {

  return (
    <div className='w-full' style={{marginTop: 0, marginBottom: 0, backgroundColor: 'white'}} >
      {/* <Header />
      <Body />
      <Footer /> */}
      <Router />
    </div>
  )
}

export default App
