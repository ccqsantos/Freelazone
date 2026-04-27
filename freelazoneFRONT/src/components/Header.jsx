import { Link } from 'react-router-dom';
import React from 'react';
import '../css/Header.css'

const Header = () => {
    return (
    <div className="header-container">
        <div className='left-side'>
            <Link to="/">Home</Link>
        </div>
        <div className='right-side'>
            <Link to="/explore">Explore</Link>
            <Link to="/login">Login</Link>
           <Link to="/join">Join</Link>
        </div>
    </div>
    )
}

export default Header;
