import { useState } from 'react'
import "./PostCard.css"


const PostCard = ({id, title, content, date, imageURL, upvote}) => {

  return (
    <div className="post">
        <p>Posted by You - {date}</p>
        <h2>{title}</h2>
        {content ? <h3>{content}</h3> : null}
        {imageURL ? <img src={imageURL} alt={title}/> : null}
        {upvote}
    </div>
  )
}

export default PostCard
