import React from 'react';

import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <img className="logo" src="./imgs/insta-logo.png" alt="#" />
                <img className="text-logo" src="./imgs/insta-text-logo.png" alt="#" />
            </div>
            <input type='text' name='search' placeholder="search" />
            <div className="nav-icons">
                <img src="./imgs/compass-icon.png" alt="#" />
                <img src="./imgs/hearth-icon.png" alt="#" />
                <img src="./imgs/person-icon.png" alt="#" />
            </div>
        </div>
    )
}

export default NavBar;