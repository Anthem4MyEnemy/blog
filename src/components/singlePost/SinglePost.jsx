import React, { useContext, useEffect, useState } from 'react';
import "./singlePost.css";
import smoke from "../assets/smoke.jpg";
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState([]);
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const handleDelete =async () =>{
        try {
            
            await axios.delete("http://localhost:5000/api/posts/"+path, {data:{username:user.username}});
            window.location.replace("/");
            
        } catch (error) {
            
        }

    }
    const hanldeUpdate = async () =>{
        try {
            axios.put("http://localhost:5000/api/posts/"+path,
             {username:user.username,title:title, desc:desc});
            setUpdateMode(false);
            //window.location.reload();
        } catch (error) {
            
        }
    }
    

    useEffect(() => {
        const getPost = async ()=>{
            const res = await axios.get("http://localhost:5000/api/posts/"+path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    }, [])
    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                {post.photo && (
                    <img
                    className="single-post-img"
                    src={PF + post.photo}
                    alt=""
                    />
                )}
                {updateMode 
                ?<input type="text" autoFocus value={title} className="single-post-update" onChange={(e) => setTitle(e.target.value)} />
                :(
                    <h1 className="single-post-title">
                    {title}
                    {post.username === user?.username &&
                    <div className="single-post-edit">
                        <i className="single-post-icon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                        <i className="single-post-icon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                    }
                </h1>
                )}

                <div className="single-post-info">
                    <span className="single-post-author" >
                        Author:  
                            <Link className="link" to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                            </Link>
                        </span>
                    <span className="single-post-date" >Date: {new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode 
                ?<textarea className="desc-input" value={desc} onChange={(e) => setDesc(e.target.value)}/> 
                :(

                    <p className="desc">
                    {desc}
                </p>
                )}
                {updateMode && 
                <button onClick={hanldeUpdate} className="single-post-button">Update</button>
                }
            </div>
        </div>
    )
}


export default SinglePost
