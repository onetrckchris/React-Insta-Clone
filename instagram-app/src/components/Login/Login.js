import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './Login.css';

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
                <FormGroup>
                    <Label for="login-username">Email</Label>
                    <Input type="text" name="username" id="login-username" onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="login-password">Password</Label>
                    <Input type="password" name="password" id="login-password" onChange={this.onChange} />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        )
    }
}

export default Login
