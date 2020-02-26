import React, { Component } from "react";
import md5 from 'md5';
import { Wrapper, Container, Input, SubmitBtn, Title } from "./RegisterStyled";
import firebase from '../../firebase/firebase';




class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors:'',
    userRef:firebase.database().ref('users')
  };

  nameChange = event =>
    this.setState({
      username: event.target.value
    });

  emailChange = event =>
    this.setState({
      email: event.target.value
    });

  passwordChange = event =>
    this.setState({
      password: event.target.value
    });

  passwordConfirm = event =>
    this.setState({
      confirmPassword: event.target.value
    });
  

  isfromValid = () =>{
    let errors = [];
    let error;

    if(this.isEmpty(this.state))
    {
      error= { message : 'Fill in the blanks'}
      this.setState({errors: errors.concat(error)})
      return false;
    }
    else return true;
  }

  isEmpty = ({username, email, password, confirmPassword}) => {
    return !username.length || !email.length || !password.length;
  }

  handleSubmit = event =>
  {
      event.preventDefault();
      if(this.isfromValid())
      {
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(createUser =>{
          console.log(createUser)
          createUser.user.updateProfile({
            displayName:this.state.username,
            photoURL:`http://gravatar.com/avatar/${md5(createUser.user.email)}?d=identicon`
          })  
          .then(()=>{
            this.saveUser(createUser).then(()=>console.log("user saved"))
          })
          
        })
      
        .catch(err => {
          console.log(err)
         
        });
      }

  }

  saveUser = (createUser) =>{

    return this.state.userRef.child(createUser.user.uid).set({
      name:createUser.user.displayName,
      avatar:createUser.user.photoURL
    })
  }

  render() {
    const { username, email, password} = this.state;
    return (
      <Wrapper>
        <Container>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Title>REGISTER</Title>
            <Input
              onChange={this.nameChange}
              placeholder="Username"
              value={username}
              type="text"
            />
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

export default Register;
