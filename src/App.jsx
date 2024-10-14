import React from 'react'
import "./App.css"
import { Routes , Route} from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Navbar />}/>
      </Routes>
    </div>
  )
}

export default App