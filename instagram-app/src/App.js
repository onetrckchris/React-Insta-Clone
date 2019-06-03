import React from 'react';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

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
        <PostContainer instaPosts={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
