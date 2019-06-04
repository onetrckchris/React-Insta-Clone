import React from 'react';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import NavBar from './components/NavBar/NavBar';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: dummyData,
      filteredPosts: []
    }
  }

  search = event => {
    if(event.target.value !== '') {
      this.setState({
        filteredPosts: this.state.posts.filter(post => 
          post.username.includes(event.target.value
        ))
      }) 
    } else {
      this.setState({ filteredPosts: this.state.posts })
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar search={this.search} />
        <PostContainer 
          instaPosts={this.state.filteredPosts.length !== 0 ? this.state.filteredPosts : this.state.posts } 
          likePost={this.likePost}
        />
      </div>
    );
  }
}

export default App;
