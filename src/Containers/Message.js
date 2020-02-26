import React, { Component } from "react";
import Message from "../components/Message/Message";
import firebase from "../firebase/firebase";
import mime from 'mime-types';
import uuidv4 from 'uuid/v4';

class MessageContainer extends Component {
  state = {
    storageRef:firebase.storage().ref(),
    messageRef: firebase.database().ref("messages"),
    message: "",
    loading: "true",
    messages: [],
    file: null,
    authorized:['image/jpg','image/png','image/jpeg'],
    uploadState:'',
    percentUploaded:0,
    uploadTask:null,
    channelName:this.props.channel && this.props.channel.name,
    numberOfUsers:'',
    serachItem:'',
    searchResults:[]

  };

  handleSearch = event =>this.setState({serachItem:event.target.value},()=>this.searchMessage())
  searchMessage= () =>{
    const {messages, serachItem} = this.state;
    const regex = new RegExp(serachItem,'gi');
    const channelMessage = [...messages]
    const searchResults =  channelMessage.reduce((acc,message)=>{
        
      if(message.content && message.content.match(regex)) acc.push(message)

      return acc;
    },[])

    this.setState({searchResults})
  }

  addFile = event => {
    const file = event.target.files[0];

    if (file) {
      this.setState({ file: file });
    }
  };


  userCounter = (message) => {
      const uniqueUsers = message.reduce((acc,message)=>{
        if(!acc.includes(message.user.name)) acc.push(message.user.name)
        return acc;
      },[]);
      const numberOfUsers = `${uniqueUsers.length} users`;

      this.setState({numberOfUsers})
  }

  sendfile = () =>{

    const {file} = this.state;

    if(this.isAuthorized(file.name))
    {
      const metadata = {contentType:mime.lookup(file.name)}

      this.uploadFile(file,metadata);
    }
  
  }

  uploadFile = (file, metadata) => {
    const {channel} = this.props;
    const pathToUpload = channel.id;
    const ref = this.state.messageRef;
    const filePath = `chat/public/${uuidv4()}.jpg`;

    this.setState(
      {
        uploadState: "uploading",
        uploadTask: this.state.storageRef.child(filePath).put(file, metadata)
      },
      () => {
        this.state.uploadTask.on(
          "state_changed",
          snap => {
            const percentUploaded = Math.round(
              (snap.bytesTransferred / snap.totalBytes) * 100
            );
            this.setState({ percentUploaded });
          },
          err => {

            this.setState({
              uploadState: "error",
              uploadTask: null
            });
          },
          () => {
            this.state.uploadTask.snapshot.ref
              .getDownloadURL()
              .then(downloadUrl => {
                this.sendFileMessage(downloadUrl, ref, pathToUpload);
              })
              .catch(err => {
 
                this.setState({
                  uploadState: "error",
                  uploadTask: null
                });
              });
          }
        );
      }
    );
  };

  sendFileMessage = (fileUrl, ref, pathToUpload) => {

    const {user} = this.props;
    ref
      .child(pathToUpload)
      .push()
      .set(this.createMessage(user,fileUrl))
      .then(() => {
        this.setState({ uploadState: "done",  message: "" });
      })
      .catch(err => {
        console.error(err);
      });
  };

  isAuthorized = filename => this.state.authorized.includes(mime.lookup(filename))


  createMessage = (user, fileUrl=null) => {

    const  newMessage = 
      {
        time: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: user.uid,
          name: user.displayName,
          avatar: user.photoURL
        },
      }

      if(fileUrl == null)
      {
        newMessage['content']=this.state.message
        newMessage['image']=fileUrl
      }
      else 
      {
        newMessage['content']=this.state.message
        newMessage['image']=fileUrl
      }

      return newMessage;
  };

  setMessage = event => this.setState({ message: event.target.value });
  sendMessage = () => {
    const { messageRef, message } = this.state;
    const { user, channel } = this.props;

    if (message) {
      messageRef
        .child(channel.id)
        .push()
        .set(this.createMessage(user))
        .then(() => {
          this.setState({ loading: false, message: "" });
        });


    }
  };

  getMessage = () => {
    const { user, channel } = this.props;
    const { messageRef } = this.state;
    let value = [];
    if (user && channel) {
      messageRef.child(channel.id).on("child_added", snap => {
        value.push(snap.val());

        this.setState({ messages: value });
        this.userCounter(value)
      });

      
    }
  };

  componentDidMount() {

    this.getMessage();
  }

  render() {
    const { message, messages, channelName, numberOfUsers, searchResults, serachItem } = this.state;
    return (
      <Message
        messages={serachItem ? searchResults : messages }
        message={message}
        setMessage={this.setMessage}
        sendMessage={this.sendMessage}

        addFile={this.addFile}
        sendfile={this.sendfile}

        channelName={channelName}
        numberOfUsers={numberOfUsers}

        handleSearch={this.handleSearch}
      />
    );
  }
}

export default MessageContainer;
