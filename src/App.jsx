import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreatePost/>}/> 
      </Routes>    
    </>
  )
}

export default App
