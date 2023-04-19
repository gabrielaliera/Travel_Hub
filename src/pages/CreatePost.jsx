import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'


const CreatePost = ({userID}) => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [content,setContent] = useState("")
    const [imageURL, setImageURL] = useState("")
 

    const createPost = async (event) => {
        event.preventDefault();
    
       const{data, error} = await supabase
        .from('Posts')
        .insert({userID: userID,
                 title: title, 
                 content: content, 
                 image_url: imageURL,
                 upvotes:0,
                 comments:[]})
    
        if(error){
            console.log(error)
        }
        if(data){
            console.log(data);
            navigate("/");
        }
    
    }

    return (
        <div>
            <form onSubmit={createPost}>
                <input 
                    type="text"
                    id="title" 
                    name="title" 
                    placeholder='Title'
                    value ={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    type="text"
                    id="content"
                    name="content"
                    placeholder="Content"
                    value ={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input 
                    type="url" 
                    id="image_url"  
                    name="image_url"
                    placeholder="Image URL"
                    value ={imageURL} 
                    onChange={(e) => setImageURL(e.target.value)}
                />              
               
                <button>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost