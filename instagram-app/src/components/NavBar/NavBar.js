import React from 'react';

import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <img className="logo" src="./imgs/insta-logo.png" />
                <img className="text-logo" src="./imgs/insta-text-logo.png" />
            </div>
            <input type='text' name='search' />
            <div className="nav-icons">
                <img src="./imgs/compass-icon.png" />
                <img src="./imgs/hearth-icon.png" />
                <img src="./imgs/person-icon.png" />
            </div>
        </div>
    )
}

export default NavBar;