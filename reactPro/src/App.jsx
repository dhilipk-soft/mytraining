import { useState } from 'react'  
import Nav from './Component/Nav.jsx'
import HandleList from './Component/HandleList.jsx'

function App() {

  return (
    <div className="w-full h-screen bg-gray-100">
      < Nav /> 
      < HandleList />
    </ div>
  )
}

export default App
