import React from 'react';

import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
