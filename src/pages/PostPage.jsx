import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import Comments from '../components/Comments';
import { supabase } from "../supabaseClient";
import {parseDate} from "../utils/parseDate" 
import UpVote from "../components/UpVote"



const PostPage =  ({userID}) => {

    const navigate = useNavigate();
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

    
    if(loading){
        return <div></div>
    } else{
        return (
            <div className="post-page">
                <p>Posted by {userID == post.userID ? "You" : `@${post.userID}`} | {parseDate(post.created_at)}</p>
                <h2>{post.title}</h2>
                
                {post.content ? <h3>{post.content}</h3> : null}
                {post.image_url ? <img src={post.image_url} alt={post.title}/> : null}
                
                <UpVote post={post}/>
                
                <Comments userID={userID} comments={post.comments} setPost={setPost} postID={post.id}/>

                <div className="update-delete">
                    {id == post.id && userID == post.userID ? (
                        <div>
                            <Link to={"/update/" + id}>
                                <i className="material-icons">edit</i>
                            </Link>
                            <i className="material-icons" onClick={handleDelete}>
                            delete
                            </i>
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
    
  }

export default PostPage;