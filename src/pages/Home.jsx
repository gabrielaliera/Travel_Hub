import React, { useEffect, useState} from "react";
import PostCard from "../components/PostCard";
import { supabase } from "../supabaseClient";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase.from("Posts").select("*");
            
            if(data){
                setPosts(data);
                console.log(data);
            }
        }

        fetchData();
    
    },[]);


    return(
        <div>
          {posts && posts.length > 0 ?
                posts.map((post,index) => 
                <PostCard key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    date={post.created_at}
                    imageURL={post.image_url}
                    upvote={post.upvote}/>
                ) : null}
        </div>
    );
}

export default Home;
  