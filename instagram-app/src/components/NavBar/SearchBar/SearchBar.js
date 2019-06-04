import React from 'react';

import './SearchBar.css'

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
            <input 
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