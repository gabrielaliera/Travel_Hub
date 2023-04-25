import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import NavBar from './components/NavBar'
import UpdatePage from './pages/UpdatePage'
import { supabase } from "./supabaseClient";
import './App.css'

function App() {

  const [userID] = useState("user" + Math.floor(100000 + Math.random() * 900000));
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("created_at");
  
  return (
    <>
      <NavBar userID={userID} search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home userID={userID} 
                                       orderBy={orderBy} 
                                       setOrderBy={setOrderBy}
                                       search={search}/>}/>
        <Route path="/create" element={<CreatePost userID={userID}/>}/>
        <Route path="/update/:id" element={<UpdatePage />}/> 
        <Route path="/post/:id" element={<PostPage userID={userID}/>} />
      </Routes>    
    </>
  )
}

export default App
