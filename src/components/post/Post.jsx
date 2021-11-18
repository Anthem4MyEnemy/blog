import React from 'react'
import "./post.css";
import fashion from "../assets/fashion.jpg";
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const PF = "http://localhost:5000/images/";

    console.log(post);
    return (
        <div className="post">
            {post.photo &&(

                <img 
                className="post-img"
                src={PF + post.photo}
                alt=""
                />
            )}

            <div className="post-info">
                <div className="post-cats">
                    {post.categories.map(cat => (
                        <span className="post-cat">{cat.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="post-title">{post.title}  </span>
                </Link>
                <hr/>
                <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            
            <p className="post-desc">{post.desc}</p>

        </div>
    )
}

export default Post
