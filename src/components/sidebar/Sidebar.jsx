import React, { useEffect, useState } from 'react'
import "./sidebar.css";
import random from "../assets/random.jpg";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () =>{
            const res = await axios.get("http://localhost:5000/api/categories");
            setCats(res.data);
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img 
                className="info-img"
                src={random} 
                alt="sidebar" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam laudantium illum distinctio possimus necessitatibus 
                </p>
                <div className="sidebar-item">
                    <span className="sidebar-title">CATEGORIES</span>
                        <ul className="sidebar-list">
                            {cats.map(cat =>(
                                <Link className="link" to={`/?cat=${cat.name}`}>
                                    <li className="sidebar-list-item">{cat.name}</li>
                                </Link>
                            ))}
                            
                        </ul>
                </div>
                <div className="wrapper">

                <div className="">
                    <span className="sidebar-title">FOLLOW US</span>
                    <div className="sidebar-social">
                        <i className="sidebar-icon fab fa-pinterest-square"></i>
                        <i className="sidebar-icon fab fa-twitter-square"></i>
                        <i className="sidebar-icon fab fa-instagram-square"></i>
                        <i className="sidebar-icon fab fa-facebook-square"></i>
                    </div>
                </div>

                </div>

            </div>
        </div>
    )
}

export default Sidebar
