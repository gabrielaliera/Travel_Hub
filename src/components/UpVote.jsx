import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { supabase } from "../supabaseClient";

const UpVote = ({post}) => {
    //post = post[0]
    const { id } = useParams();
    const [upvotes, setUpvotes] = useState(post.upvotes);
    const navigate = useNavigate();
    console.log(post )

 const handleUpvote = async () => {
    const newUpvotes = post.upvotes + 1;
    
  
    const { data, error } = await supabase
      .from("Posts")
      .update({upvotes: newUpvotes})
      .eq("id", post.id);
  
    if (error) {
      console.log("error: ", error);
      navigate("/post/" + post.id);
    } else {
      setUpvotes(upvotes + 1);
    }
  };
  

  return (
    <div className="upvote">
        <ThumbUpOutlinedIcon/>  
      <button onClick={handleUpvote}>
        
        <span>{upvotes} votes</span>
      </button>
    </div>
  );
}

export default UpVote;