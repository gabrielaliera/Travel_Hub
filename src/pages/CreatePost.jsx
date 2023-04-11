import React, { useState } from 'react';
import { supabase } from '../supabaseClient'


const CreatePost = () => {

    const [post, setPost] = useState({title: "", content: "", image_url: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
    
       await supabase
        .from('Posts')
        .insert({title: post.title, 
                 content: post.content, 
                 image_url: post.image_url})
        .select();
    
        window.location = "/";
    }

    return (
        <div>
            <form>
                <label >Title</label> <br />
                <input type="text" id="title" name="title" value ={post.title} onChange={handleChange}/><br />
                <br/>

                <label >Content</label><br />
                <input type="text" id="content" name="content" value ={post.content} onChange={handleChange}/><br />
                <br/>

                <label >Image URL</label><br />
                <input type="url" id="image_url"  name="image_url" value ={post.image_url} onChange={handleChange}/>              
                <br/>
               
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost