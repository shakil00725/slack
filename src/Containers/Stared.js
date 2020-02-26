import React, { Component } from 'react';
import Starred from '../components/Starred/Starred';

class StarredContainer extends Component {

  state={
    starred:["React"],
  }
  render() {
    return (
      <Starred {...this.state}/>
    );
  }
}

export default StarredContainer;