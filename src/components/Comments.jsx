import { useState } from 'react'
import { supabase } from "../supabaseClient";


const Comments = ({}) => {

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  
  const handleAddComment = async (e) => {
    e.preventDefault();


    const { data, error } = await supabase
      .from("posts")
      .update({ comments: [...comments, { author: userId, text: newComment, createdAt: new Date() }] })
      .eq("id", postId);

    setPost((post) => ({
      ...post,
      comments: [...comments, { author: userId, text: newComment, createdAt: new Date() }],
    }));
  };

  return (
    <div className="post">
        {comments ? 
            comments.map((comment) => (
                <div>
                    <p>{comment.text}</p>
                    <p>You on {comment.createdAt}</p>
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