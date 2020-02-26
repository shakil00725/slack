import styled from 'styled-components';

export const Channel = styled.div``;
export const Title = styled.h1``;
export const DirectMessageContainer = styled.div`
    display:flex;

    justify-content:flex-start;
    align-items:center;

    ${Title}{
        text-align:center;
        font-size:1em;
        margin:0;
        margin-left:1em;
        text-transform:capitalize;
    
    }

`;

export const ChannelTitle = styled.div`

    display:flex;
    align-items:center;
    >h1{
        font-size:.8em;
        color:white;
        text-transform: uppercase;
        padding:0 50px 0 10px;
    }
`;

export const ChannelContainer = styled.div`
    >div{
        font-size:1em;
        color:gray;
        &:hover{
            background:white;
            opacity:.2;

            >${Title}{
                color:black;
            }
        }
    }
`;


