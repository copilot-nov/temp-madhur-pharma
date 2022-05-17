import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_USER } from '../redux/actions/user';
import LoginForm from './loginForm';

const Login = (props) => {
    const { LOGIN_USER } = props
    // console.log(process.env)


    return (
        <div>
            <LoginForm LOGIN_USER={LOGIN_USER} />
        </div>
    )
}

export default connect(null, { LOGIN_USER })(Login)
