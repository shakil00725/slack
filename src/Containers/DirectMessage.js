import React, { Component } from 'react';
import DMessage from '../components/DirectMessage/DirectMessage';
import firebase from '../firebase/firebase';


class DirectMessageContainer extends Component {

  state = {
      users:[],
      userRef:firebase.database().ref('users'),
      connectedRef:firebase.database().ref('.info/connected'),
      presenceRef:firebase.database().ref('presence'),
  }

  getUsers = () => {
      const {userRef, presenceRef} = this.state;

      let loadUsers = [];
      userRef.on('child_added',snap=>{
      console.log("in",this.props.children)
        if(this.props.children !== snap.key)
        {
            let user = snap.val();
            user['uid']=snap.key;
            user['status']='offline';
            loadUsers.push(user);
            console.log(this.props.children)
            this.setState({users:loadUsers})
        }
      })

      this.state.connectedRef.on('value',snap=>{
          if(snap.val() ===true )
          {
              const ref = presenceRef.child(this.props.children);
              ref.set(true);
              ref.onDisconnect().remove(err =>(console.log(err)))
          }
      })

      presenceRef.on('child_added',snap=>{
        if(this.props.children !== snap.key)
        {
            this.statusListener(snap.key)
        }
        
      })

      presenceRef.on('child_removed',snap=>{
        if(this.props.children!== snap.key)
        {
            this.statusListener(snap.key,false)
        }
        
      })

  }


  statusListener = (userID, connected = true) => {
      const updateuser = this.state.users.reduce((acc,user)=>{
          if(user.id === userID) user['status'] = `${connected ? 'online' : 'offline'}`
          console.log(user)
          return acc.concat(user)
      },[])

      this.setState({users:updateuser})
  }

  componentDidMount(){
    this.getUsers();
  }

  render() {
    const {users} = this.state;
    return (
      <DMessage users={users} />
    );
  }
}

export default DirectMessageContainer;