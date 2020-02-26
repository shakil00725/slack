import styled from 'styled-components';

export const Channel = styled.div``;
export const Title = styled.span``;

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


