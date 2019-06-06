import React from 'react';

const withAuthenticate = SomeComponent => LoginPage =>
    class extends React.Component {
        constructor() {
            super();

            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if(localStorage.getItem('login-username')) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        }

        render() {
            return (
                this.state.loggedIn ? <SomeComponent /> : <LoginPage />
            )
        }
    }

export default withAuthenticate;