import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Comments from '../components/Comments';
import { supabase } from "../supabaseClient";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";


const PostPage =  ({userID}) => {

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
                console.log("data call")
                console.log(data);
              setPost(data[0]);
            }
            setLoading(false);
          };
      
          fetchPost();
    }, [id]);

    
    if(loading){
        return <div></div>
    } else{
        return (
            <div className="post-page">
                <p>Posted by {userID} on {post.created_at}</p>
                <h2>{post.title}</h2>
                {post.content ? <h3>{post.content}</h3> : null}
                {post.image_url ? <img src={post.image_url} alt={post.title}/> : null}
                <div className="upvotes">
                  <ThumbUpOutlinedIcon/> {`  ${upvote}  votes`}
                </div>
                <Comments/>
            </div>
        )
    }
    
  }

export default PostPage;