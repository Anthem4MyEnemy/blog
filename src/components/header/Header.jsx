import React from 'react';
import './header.css';
import background from "../assets/background.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-small">React & Node</span>
                <span className="header-title-large">Blog</span>
            </div>
            <img className="header-img"
            src={background}
            alt=""
            />
        </div>
    )
}

export default Header
