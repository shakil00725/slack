import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Register from "./Containers/Register";
import Login from "./Containers/Login";
import * as serviceWorker from "./serviceWorker";
import firebase from "./firebase/firebase";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from './Redux/Reducers/index';
import {setUser, clearUser} from './Redux/Actions/index';


const store = createStore(rootReducers, composeWithDevTools());

class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/home");
      }
      else{
        //this.props.history.push("/login");
        //this.props.clearUser();
      }
    });
  }
  render() {
    return (   
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route exact path="/slack-chat" component={Login} />
      </Switch>
    );
  }
}

const mapStatetoProps = state =>({
    isLoading:state.user.isLoading,
});

const RootWithAuth = withRouter(connect(mapStatetoProps,{ setUser, clearUser })(Root));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
