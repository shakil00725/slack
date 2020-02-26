import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Channel, ChannelTitle, ChannelContainer, Title, DirectMessageContainer } from "./DMStyled";

const DMessage = ({ users }) => {

    return (
      <Channel>
        <ChannelTitle>
          <FontAwesomeIcon icon={faMailBulk} color="white"/>
          <h1>Direct Messages({users.length})</h1>
        </ChannelTitle>
        <ChannelContainer>
          {users.map(m => (
            <DirectMessageContainer>  
            <FontAwesomeIcon icon={faCircle} color={m.status === 'online' ? 'green': 'red'} size='1x'/>
            <Title>{m.name}</Title>
            </DirectMessageContainer>
          ))}
        </ChannelContainer>
      </Channel>
    );
  };

export default DMessage;