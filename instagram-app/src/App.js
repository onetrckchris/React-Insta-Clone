import React from 'react';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import NavBar from './components/NavBar/NavBar';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PostContainer instaPosts={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
