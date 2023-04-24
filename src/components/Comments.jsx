import { useState } from 'react'
import { supabase } from "../supabaseClient";
import {parseDate} from "../utils/parseDate" 


const Comments = ({comments, userID, setPost, postID}) => {

  const [newComment, setNewComment] = useState("")
  
  const handleAddComment = async (e) => {
    e.preventDefault();


    const { data, error } = await supabase
      .from("Posts")
      .update({ comments: [...comments, { commenter: userID, text: newComment, createdAt: new Date().toISOString() }] })
      .eq("id", postID);

    setPost((post) => ({
      ...post,
      comments: [...comments, { commenter: userID, text: newComment, createdAt: new Date().toISOString()}],
    }));
  
    
    if (error) {
      console.log("error: ", error);
    }

    if (data) {
      console.log("data comment: ", data)    
      setNewComment("");
    }
  };

  return (
    <div className="post">
        {comments ? 
            comments.map((comment, index) => (
                <div key={index}>
                   {comment.commenter == userID ? "You" : "@" + comment.commenter} | {parseDate(comment.createdAt)}
                   <br/>{comment.text}
                </div>
        )) : null}
        <div>
            <form onSubmit={handleAddComment}>
              <input
                  className="comment-input"
                  type="text"
                  placeholder="Leave a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
              />
            </form>
        </div>
    </div>
  )
}

export default Comments;