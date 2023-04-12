import { useState } from 'react'
import "./PostCard.css"

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";


const PostCard = ({id, title, content, date, imageURL, upvote}) => {

  return (
    <div className="post">
        <p>Posted by You - {date}</p>
        <h2>{title}</h2>
        <div>
         {upvote} <ThumbUpOutlinedIcon/>
        </div>
        
    </div>
  )
}

export default PostCard
