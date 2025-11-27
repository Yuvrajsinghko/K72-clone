import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'



const App = () => {
  return (
    <div className='text-white'>     
      <div className='h-screen fixed z-10 flex w-full'>
        <div className='h-full w-1/5 bg-amber-700'></div>
        <div className='h-full w-1/5 bg-amber-700'></div>
        <div className='h-full w-1/5 bg-amber-700'></div>
      </div>
      
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/agence' element={<Agence />}/>
        <Route  path='/projects' element={<Projects />}/>
      </Routes>
    </div>
  )
}

export default App