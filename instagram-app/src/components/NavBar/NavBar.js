import React from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar/SearchBar';

const Navbar = styled.div`
    display: flex;
    position: fixed;
    background-color: white;
    width: 100%;
    height: 75px;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #E6E6E6;
`;

const NavIcons = styled.div`
    display: flex;
    align-items: center;
`;

const AlignedDiv = styled.div`
    display: flex;
    align-items: center;
`;

const InstaTextLogo = styled.img`
    height: 40px;
    border-left: 1px solid gray;
    padding-left: 5px;
    margin-left: 20px;
`;

const MarginLeft = styled.div`
    margin-left: 30px;
`;

const NavBar = props => {
    return (
        <Navbar>
            <AlignedDiv>
                <i className="fab fa-instagram fa-2x"></i>
                <InstaTextLogo className="text-logo" src="./imgs/instagram-text-logo-large.png" alt="#" />
            </AlignedDiv>
            <SearchBar search={props.search} />
            <NavIcons>
                <form onSubmit={props.logout}>
                    <button className="logout-button">Logout</button>
                </form>
                <MarginLeft><i className="far fa-compass fa-lg"></i></MarginLeft>
                <MarginLeft><i className="far fa-heart fa-lg"></i></MarginLeft>
                <MarginLeft><i className="far fa-user fa-lg"></i></MarginLeft>
            </NavIcons>
        </Navbar>
    )
}

export default NavBar;