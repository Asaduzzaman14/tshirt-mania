import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
const Header = () => {
    return (
        <div>
            <h2> Welcome to tshirt maina</h2>
            <nav className='navbar'>
                <Link to='/home'>Home</Link>
                <Link to='/orderteview'>OrderReview</Link>
                <Link to='/grandpa'>grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;