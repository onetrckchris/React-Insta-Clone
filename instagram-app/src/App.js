import React from 'react';
import styled from 'styled-components';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

const AppContainer = styled.div`
  background-color: #FAFAFA;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  render() {
    return (
      <AppContainer className="App">
        <ComponentFromWithAuthenticate />
      </AppContainer>
    );
  }
}

export default App;
