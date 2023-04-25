import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Comments from '../components/Comments';
import { supabase } from "../supabaseClient";
import {parseDate} from "../utils/parseDate" 
import UpVote from "../components/UpVote"



const UpdatePage =  ({userID}) => {

    const { id } = useParams();
    const [upvote, setUpVote] = useState(0);
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect( ()=>{
        const fetchPost = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("Posts")
                .select()
                .eq("id", id);
          
            // Current post data
            if (data) {
              setPost(data[0]);
            }
            setLoading(false);
          };
      
          fetchPost();
    }, [id]);

    
    return (
        <div>
            <form onSubmit={createPost}>
                <input 
                    type="text"
                    id="title" 
                    name="title" 
                    placeholder='Title'
                    value ={post.title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    type="text"
                    id="content"
                    name="content"
                    placeholder="Content"
                    value ={post.content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input 
                    type="url" 
                    id="image_url"  
                    name="image_url"
                    placeholder="Image URL"
                    value ={post.imag_url} 
                    onChange={(e) => setImageURL(e.target.value)}
                />              
                <button>Create Post</button>
            </form>
        </div>
    )
    
  }

export default UpdatePage;