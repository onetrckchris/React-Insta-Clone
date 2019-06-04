import React from 'react';

import SearchBar from './SearchBar/SearchBar';

import './NavBar.css'

const NavBar = props => {
    return (
        <div className="navbar">
            <div>
                <img className="logo" src="./imgs/insta-logo.png" alt="#" />
                <img className="text-logo" src="./imgs/insta-text-logo.png" alt="#" />
            </div>
            <SearchBar search={props.search} />
            <div className="nav-icons">
                <img src="./imgs/compass-icon.png" alt="#" />
                <img src="./imgs/hearth-icon.png" alt="#" />
                <img src="./imgs/person-icon.png" alt="#" />
            </div>
        </div>
    )
}

export default NavBar;