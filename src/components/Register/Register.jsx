import React from 'react';
import {Wrapper, ImageWrapper, LoginWrapper } from './RegisterStyled';

const Register = ({nameChange,emailChange,passwordChange,handleSubmit}) => (
    <Wrapper>
        <ImageWrapper></ImageWrapper>
        <LoginWrapper>
            <h1>Slack-Chat</h1>
            <input onChange={nameChange} type="text" placeholder="Username"/>
            <input onChange={emailChange} type="text" placeholder="email" />
            <input onChange={passwordChange} type="password" placeholder="Password" />
            <button onClick={()=>handleSubmit()}>Register</button>
            <span >You have a Account <a href="/login">Login</a> Here</span>
        </LoginWrapper>
    </Wrapper>
);

export default Register;