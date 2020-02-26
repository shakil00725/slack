import styled from 'styled-components';
import {Button} from 'semantic-ui-react';

export const Wrapper = styled.div`
  background: #EAECEE;
  height:100vh;
`;

export const Container = styled.div`
    padding:10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width:450px;
    background:white;
    width:50%;
    text-align:center;

`;

export const Input = styled.input`
        width:80%;
        height:25px;
        margin:5px;
        padding-left:20px;
`;

export const SubmitBtn = styled.input`
        margin-top:20px;
        color:white;
        background:#F1C40F ;
        outline:none;
        border:none;
        width:100%;
        height:40px;
`;

export const Title = styled.h1`
    color:#F1C40F;
    margin:0;
    padding:2px;
    font-size:2rem;
`;