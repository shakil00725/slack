import React, { Component } from "react";
import Channels from "../components/Channels/Channels";
import firebase from "../firebase/firebase";
import { connect } from "react-redux";
import {setChannel} from '../Redux/Actions/index';

class ChannelContainer extends Component {
  state = {
    channels: [],
    channel: "",
    description: "",
    channelRef: firebase.database().ref("channels"),
    firstLoad:true,
  };

  changeChannel = channel =>{
    this.props.setChannel(channel);
    console.log(channel);
  }

  addData = () => {
    const { channel, description, channelRef } = this.state;
    const key = channelRef.push().key;

    const newChannel = {
      id: key,
      name: channel,
      details: description,
      createdBy: {
        user: this.props.user.displayName,
        avatar: this.props.user.photoURL
      }
    };

    channelRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channel: "", description: "" });
        console.log("channel added");
      });
  };

  getData = () => {
    let channels = [];
    const { channelRef,firstLoad } = this.state;
    channelRef.on("child_added", (snapshot, prevChildKey) => {
      let value = snapshot.val();
      channels.push(value)
      this.setState({channels:channels},()=>{
        if(firstLoad && channels.length >0){
          this.changeChannel(channels[0])
          this.setState({firstLoad:false})
        }
      })
    });
  };


  setChannel = event => this.setState({ channel: event.target.value });
  setDescription = event => this.setState({ description: event.target.value });
  submitChannel = () => {this.addData();};

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Channels
        changeChannel={this.changeChannel}
        setChannel={this.setChannel}
        setDescription={this.setDescription}
        submitChannel={this.submitChannel}
        {...this.state}
      />
    );
  }
}

export default connect(null,{setChannel})(ChannelContainer);
