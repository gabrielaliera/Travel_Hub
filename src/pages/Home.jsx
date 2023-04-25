import React, { useEffect, useState} from "react";
import PostCard from "../components/PostCard";
import {Link} from 'react-router-dom';
import { supabase } from "../supabaseClient";

const Home = ({userID, orderBy, setOrderBy, search}) => {
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
        <div>
            <div className="order-by">
            <span>Order by:</span>
            <button style={{ backgroundColor: orderBy == "created_at" ? "#0E7C6B" : "#12bca2" }} onClick={() => setOrderBy("created_at")}>
              Newest
            </button>
            <button style={{ backgroundColor: orderBy == "upvotes" ? "#0E7C6B" : "#12bca2" }} onClick={() => setOrderBy("upvotes")}>
              Most Popular
            </button>
          </div>
            <div className="post-list">
            {posts && posts.length > 0 ?
                    posts.filter((post) => post.title.toLowerCase().includes(search))
                    .map((post,index) => 
                    <Link to={"/post/" + post.id}>
                        <PostCard key={post.id}
                            userID={userID}
                            post={post}/>
                    </Link>
                    ) : null}
            </div>
        </div>
    );
}

export default Home;
  