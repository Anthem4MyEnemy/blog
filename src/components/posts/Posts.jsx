import React, { useEffect } from 'react';
import Post from '../post/Post';
import "./posts.css";

const Posts = ({posts}) => {
    useEffect(() => {
        console.log(posts);
        
    }, [])
    return (
        <div className="posts">
            {posts.map(p=>(
                <Post post={p}/>
            ))}
          
        </div>
    )
}

export default Posts
