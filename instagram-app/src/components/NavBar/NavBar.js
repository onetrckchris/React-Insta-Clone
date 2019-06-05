import React from 'react';
import {
    Navbar,
    Nav
} from 'reactstrap';

import SearchBar from './SearchBar/SearchBar';

import './NavBar.css'

const NavBar = props => {
    return (
        <Navbar className="custom-navbar" fixed="top">
            <div>
                <img className="logo" src="./imgs/insta-logo.png" alt="#" />
                <img className="text-logo" src="./imgs/insta-text-logo.png" alt="#" />
            </div>
            <SearchBar search={props.search} />
            <Nav className="nav-icons">
                <form onSubmit={props.logout}>
                    <button className="logout-button">Logout</button>
                </form>
                <img src="./imgs/compass-icon.png" alt="#" />
                <img src="./imgs/hearth-icon.png" alt="#" />
                <img src="./imgs/person-icon.png" alt="#" />
            </Nav>
        </Navbar>
    )
}

export default NavBar;