import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 55%;
  margin: 1em;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding: 10px;
  background: gray;
`;


export const SearchContainer = styled.div`

        >input{
                height:30px;
                outline:none;
                border-radius:5px;
                border:none;
                padding-left:10px;
        }

        > ${Icon} {
        padding: 0px;
        background: transparent;
        position:relative;
        left:-1.4em;
        bottom:-.1em;
      }
`;


export const HeaderContainer = styled.div`
  background: white;
  width: 100%;
  height: 10%;
  box-shadow: inset 0 0 55px 2px #e5e7e5;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    margin: 1em;
    > div {
      display: flex;
      align-items: center;
      > h1 {
        margin: 0;
        font-size: 1.5em;
      }
      > ${Icon} {
        padding: 0px;
        background: transparent;
      }
    }
  }
`;

export const MessageContainer = styled.div`
  background: white;
  width: 100%;
  height: 70vh;
  box-shadow: inset 0 0 55px 2px #e5e7e5;
  margin-bottom: 1em;
  overflow-x: hidden; 
  overflow-x: auto; 
`;

export const InputContainer = styled.div`
  background: white;
  width: 100%;
  height: 16%;
  box-shadow: inset 0 0 55px 1px #e5e7e5;

  > div:nth-child(1) {
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > input {
      width: 100%;
      height: 30px;
      padding-left: 10px;
    }
  }

  > div:nth-child(2) {
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > button:nth-child(1) {
      width: 49%;
      height: 50px;
      background: #25d698;
      border-radius: 5px;
      border: none;
      outline: none;
      color: white;
    }
    > button:nth-child(2) {
      width: 49%;
      height: 50px;
      background: gray;

      border-radius: 5px;
      border: none;
      outline: none;
      color: white;
    }
  }
`;


export const Messages = styled.div`
  margin: 1em;
  background:white;
  display:flex;
  align-items:flex-start;

  >div{
    >img{
    width:50px;
    margin-right:.6em;
    padding:0;
  
  }
  }
  >span{
    height:50px;
    border-right:3px solid #25d698;  
  }


  >section{

  
    display:flex;
    flex-direction:column;

    >div:nth-child(1)
    {
      margin-left:.5em;
      height:50%;
      align-self:flex-start;
      display:flex;
  
      >h1{
        margin:0;
        font-size:1em;
        padding-right:5px;
      }

      >span{
        margin:0;
        padding:0;
        color:gray;
        font-size:1em;
      }

    }


    >div:nth-child(2)
    {
      margin-left:.5em;
      height:50%;
      align-self:flex-start;
    }
  }
`;