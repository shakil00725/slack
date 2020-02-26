/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { SideBarContainer, ProfileContainer, Title } from "./SidebarStyled";
import firebase from "../../firebase/firebase";
import ChannelContainer from '../../Containers/Channels';
import DirectMessageContainer from '../../Containers/DirectMessage';
import {useHistory} from 'react-router-dom';

const SideBar = ({ user , userID}) => {
  const history= useHistory();
  const signedOutUser = () => firebase.auth().signOut().then(()=>history.push("/login"))

  return (
    <SideBarContainer>
      <ProfileContainer>
        <img src={user && user.photoURL} alt="" width="60px" height="60px" />
        <Title>
          <h1>{user && user.displayName}</h1>
          <h1>{user && user.email}</h1>
        </Title>
      </ProfileContainer>
      <button onClick={signedOutUser}>sign out</button>
      <ChannelContainer user={user}/>
      <DirectMessageContainer>{user && user.uid}</DirectMessageContainer>
    </SideBarContainer>
  );
};





export default SideBar;
