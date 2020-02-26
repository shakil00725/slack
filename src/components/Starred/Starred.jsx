import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Channel, ChannelTitle, ChannelContainer, Title } from "./StarredStyled";

const Starred = ({ starred }) => {
    return (
      <Channel>
        <ChannelTitle>
          <FontAwesomeIcon icon={faStar} color="white"/>
          <h1>Starred({starred.length})</h1>
        </ChannelTitle>
        <ChannelContainer>
          {starred.map(m => (
            <div><Title>@ {m}</Title></div>
          ))}
        </ChannelContainer>
      </Channel>
    );
  };

export default Starred;