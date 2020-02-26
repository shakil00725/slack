import styled from 'styled-components';

export const Modal = styled.div`
    width:210vh;
    height:100vh;
    background:black;
    opacity:.9;
    position:absolute;
    z-index:299;
    top:0;
    left:0;
    display:${(props) => props.view};
    justify-content:center;
    align-items:center;
    >div{
        width: 500px;
        height:300px;
        background:white;
        opacity:1;

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        >input{
            height:25px;
            width:70%;
            margin:20px;
            border-radius:10px;
            padding-left:20px;
            outline:none;

            
        }

        >div{
            width:100%;
            display:flex;
            justify-content:center;
            >button{
                background:#22211F;
                margin:15px;
                width:30%;
                height:40px;
                outline:none;
                color:white;
                border-radius:10px;
            }
        }
    }
`;