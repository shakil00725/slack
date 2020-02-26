import React, { Component } from "react";
import Register from "../components/Register/Register";
import firebase from "../firebase/firebase";
import md5 from "md5";

class RegisterContainer extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: "",
    userRef: firebase.database().ref("users")
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

  isfromValid = () => {
    let errors = [];
    let error;

    if (this.isEmpty(this.state)) {
      error = { message: "Fill in the blanks" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else return true;
  };

  isEmpty = ({ username, email, password, confirmPassword }) => {
    return !username.length || !email.length || !password.length;
  };

  handleSubmit = event => {
    //event.preventDefault();
    console.log("ss",this.state.email,this.state.username,this.state.password)
    if (this.isfromValid()) {
  
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createUser => {
          console.log(createUser);
          createUser.user
            .updateProfile({
              displayName: this.state.username,
              photoURL: `http://gravatar.com/avatar/${md5(
                createUser.user.email
              )}?d=identicon`
            })
            .then(() => {
              this.saveUser(createUser).then(() => console.log("user saved"));
            });
        })

        .catch(err => {
          console.log(err);
        });
    }
  };

  saveUser = createUser => {
    return this.state.userRef.child(createUser.user.uid).set({
      name: createUser.user.displayName,
      avatar: createUser.user.photoURL
    });
  };

  render() {
    return (
      <Register
        nameChange={this.nameChange}
        emailChange={this.emailChange}
        passwordChange={this.passwordChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default RegisterContainer;
