import React, { Component } from 'react'
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
    margin: auto;
    width: 350px;
    height: 380px;
    border: 1px solid #E6E6E6;
    background-color: white;
`;

const Input = styled.input`
    border-radius: 3px;
    border: 1px solid #EFEFEF;
    background-color: #FAFAFA;
    height: 40px;
    font-size: 0.8rem;
    padding-left: 10px;
    margin-bottom: 5px;
    outline: none;

    &:placeholder {
        color: #999999;
    }
`;

const Button = styled.button`
    background-color: #3897F0;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 3px;
    margin-top: 10px;
    font-size: 0.9rem;
    padding: 5px;
`;

const Img = styled.img`
    height: 100px;
    margin-bottom: 50px;
`;

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        localStorage.setItem('login-username', this.state.username);
        localStorage.setItem('login-password', this.state.password);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <Form className="login-form" onSubmit={this.login}>
                <Img src="./imgs/instagram-text-logo-large.PNG" />
                <Input 
                    type="text" 
                    name="username" 
                    id="login-username" 
                    onChange={this.onChange} 
                    placeholder="Username"
                />
                <Input 
                    type="password" 
                    name="password" 
                    id="login-password" 
                    onChange={this.onChange} 
                    placeholder="Password"
                />
                <Button>Log In</Button>
            </Form>
        )
    }
}

export default Login
