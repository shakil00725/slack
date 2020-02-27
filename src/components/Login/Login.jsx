/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Wrapper, ImageWrapper, LoginWrapper } from './LoginStyled';


const Login = ({emailChange,passwordChange,handleSubmit,password,email}) => {
    return(
        <Wrapper>
            <ImageWrapper></ImageWrapper>
            <LoginWrapper>
                <h1>Slack-Chat</h1>
                <input onChange={emailChange} type="text" placeholder="Email"/>
                <input onChange={passwordChange} type="password" placeholder="Password" />
                <button onClick={()=>handleSubmit()}>Login</button>
                <span >Dont have a Account <a href="/register">Register</a> Here</span>
            </LoginWrapper>
        </Wrapper>
    );
}

export default Login;