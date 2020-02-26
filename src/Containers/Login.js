import React, { Component } from "react";
import Login from "../components/Login/Login";
import firebase from "../firebase/firebase";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  emailChange = event =>
    this.setState({
      email: event.target.value
    });

  passwordChange = event =>
    this.setState({
      password: event.target.value
    });

  handleSubmit = event => {
    //event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(signedInuser => {
        console.log(signedInuser);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Login
        emailChange={this.emailChange}
        passwordChange={this.passwordChange}
        handleSubmit={this.handleSubmit}
        password={password}
        email={email}
      />
    );
  }
}

export default LoginContainer;
