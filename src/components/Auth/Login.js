import React, { Component } from 'react';
import { Wrapper, Container, Input, SubmitBtn, Title } from "./RegisterStyled";
import firebase from '../../firebase/firebase';
class Login extends Component {

  state= {
    email:'',
    password:''
  }

  emailChange = event =>
  this.setState({
    email: event.target.value
  });

  passwordChange = event =>
  this.setState({
    password: event.target.value
  });

  handleSubmit = event =>
  {
      event.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
      .then(signedInuser =>{
        console.log(signedInuser)
      })
      .catch(err=>{
        console.log(err)
      })

  }

  render() {
    const {email, password} = this.state;
    return (
      <Wrapper>
      
      <Container>
      <form onSubmit={this.handleSubmit}>
        <div>
          <Title>LOG-IN</Title>
            <Input
              onChange={this.emailChange}
              placeholder="Email Address"
              value={email}
              type="text"
            />
            <Input
              onChange={this.passwordChange}
              placeholder="Password"
              value={password}
              type="password"
            />
          <SubmitBtn type="submit"/>
        </div>
        </form>
      </Container>
    </Wrapper>
    );
  }
}

export default Login;