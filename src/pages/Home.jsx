import React, { useEffect, useState} from "react";
import PostCard from "../components/PostCard";
import {Link} from 'react-router-dom';
import { supabase } from "../supabaseClient";

const Home = ({userID}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase.from("Posts").select("*");
            
            if(data){
                console.log(data);
                setPosts(data);
                
            }
        }

        fetchData();
    
    },[]);


    return(
        <div className="post-list">
          {posts && posts.length > 0 ?
                posts.map((post,index) => 
                <Link to={"/post/" + post.id}>
                    <PostCard key={post.id}
                        userID={userID}
                        post={post}/>
                </Link>
                ) : null}
        </div>
    );
}

export default Home;
  