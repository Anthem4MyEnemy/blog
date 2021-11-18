import React, { useContext } from 'react';
import './topbar.css';
import profile from "../assets/profile.jpg";
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Topbar = () => {
    const {user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout =() =>{
        dispatch({type:"LOGOUT"})
    }
    console.log(user);
    return (
        <div className="top">
            <div className="top-left">
                <i className="top-icon fab fa-facebook-square"></i>
                <i className="top-icon fab fa-twitter-square"></i>
                <i className="top-icon fab fa-pinterest-square"></i>
                <i className="top-icon fab fa-instagram-square"></i>
            </div>

            <div className="top-center">
                <ul className="top-list">
                    <li className="top-list-item">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="top-list-item">
                        <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className="top-list-item">
                        <Link to="/" className="link">CONTACT</Link>
                    </li>
                    <li className="top-list-item">
                    <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="top-list-item" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>

            <div className="top-right">
                {
                    user ?(
                        <Link to="/settings">
                            <img 
                            className="top-img"
                            src={PF+user.profilePicture} alt="Profile picture"></img>
                        </Link>
                        ):
                        (
                        <ul className="top-list">
                            <li className="top-list-item">
                                <Link className="link" to="/login">LOGIN</Link>                    
                            </li>

                            <li className="top-list-item">
                                <Link className="link" to="/register">REGISTER</Link>      
                            </li>
                        </ul>              
                    )
                }
                
                <i className="top-search-icon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
