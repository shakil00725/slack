import styled from "styled-components";

export const ImageWrapper = styled.div`
  content:url("https://media-exp1.licdn.com/dms/image/C560BAQG-22OtXJPGpA/company-logo_400_400/0?e=1590019200&v=beta&t=27uTRlAZEsBdGL5NJrsqZuz_Wo7qa_aHBPwxK4axOFI");
  background-size: cover;
  background-repeat: no-repeat; 
  width: 50%;
  height:500px;
  margin:1em;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
`;
export const LoginWrapper = styled.div`
  width: 50%;
  display:flex;
  flex-flow:column;
  justify-content:center;
  align-items:center;

  >h1{
      font-size:1.5em;
      text-transform:uppercase;
  }

  >input{
      width:80%;
      margin:1em;
      border:none;
      height:2.5em;
      padding-left:10px;
      border-radius:10px;
      box-shadow: inset 0 0 55px 1px #e5e7e5;
  }

  >button{
      width:80%;
      margin:1em;
      border:none;
      background:#F1C40F;
      color:white;
      height:2.5em;
      padding-left:10px;
      border-radius:10px;

  }

  >span{
      font-size:.8em;
      font-weight: bold;

      >a{
          text-decoration:none;
          color:#2ED4AE;
      }
  }
`;

export const Wrapper = styled.section`
  display: flex;
  width: 800px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);

  @media (max-width: 800px) {
    width:100%;
    flex-wrap:wrap;
    ${ImageWrapper}{width:100% ;margin:0em;}
    ${LoginWrapper}{width:100%; margin-bottom:2em;}
  }

`;