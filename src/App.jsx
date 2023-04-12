import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import NavBar from './components/NavBar'
import { supabase } from "./supabaseClient";
import './App.css'

function App() {

  const [userID] = useState("user" + Math.floor(100000 + Math.random() * 900000));
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    
    // READ all post from table
    const fetchPosts = async () => {
      const {data} = await supabase
      .from('Posts')
      .select()
      .order('created_at', { ascending: true })

      // set state of posts
      setPosts(data)

    }

    fetchPosts()

  }, []);
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreatePost userID={userID}/>}/>
        <Route path="/post/:id" element={<PostPage userID={userID}/>} />
      </Routes>    
    </>
  )
}

export default App
