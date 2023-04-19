import { useState } from 'react'
import "./PostCard.css"
import {parseDate} from "../utils/parseDate" 
import Upvote from "./UpVote"


const PostCard = ({userID, post}) => {
 console.log(post)

 const [upvotes, setUpVotes] = useState(0);


  return (
    <div className="post">
        <p>Posted by {userID == post.userID ? "You" : `@${post.userID}`} | {parseDate(post.created_at)}</p>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Upvote post={post}/>
    </div>
  )
}

export default PostCard
