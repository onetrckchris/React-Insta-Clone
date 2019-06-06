import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    width: 200px;
    height: 25px;
    background-color: #FAFAFA;
    border: 1px solid #DBDBDB;
    outline: none;
    padding: 0px 5px;
    font-size: 0.9rem;
    border-radius: 3px;
    padding: 7px;

    &:placeholder {
        color: #BEBEBE
    }
`;

class SearchBar extends React.Component {
    constructor() {
        super();

        this.state = {
            term: ''
        }
    }

    onChange = event => {
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <SearchInput 
                type="text"
                className="search-bar"
                placeholder="Search"
                value={this.state.term}
                onChange={event => {
                    this.onChange(event);
                    this.props.search(event);
                }}
            />
        )
    }
}

export default SearchBar;