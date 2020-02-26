import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Channel,
  ChannelTitle,
  ChannelContainer,
  Title
} from "./ChannelStyled";
import ChannelAddModal from "../Modals/ChannelModal";

const Channels = ({channels, setChannel, setDescription, submitChannel, changeChannel}) => {
  const [view, setView] = useState(false);
  const viewChange = () => setView(false);

  return (
    <Channel>
      <ChannelTitle>
        <FontAwesomeIcon icon={faExchangeAlt} color="white" />
        <h1>Channels({channels.length})</h1>
        <FontAwesomeIcon
          icon={faPlus}
          color="white"
          onClick={() => setView(true)}
        />
      </ChannelTitle>
      <ChannelContainer>
        {channels.map(m => (
          <div onClick={()=>changeChannel(m)} >
            <Title key={m.id}># {m.name}</Title>
          </div>
        ))}
      </ChannelContainer>
      {view ? (
        <ChannelAddModal
          setChannel={setChannel}
          setDescription={setDescription}
          submitChannel={submitChannel}
          viewChange={viewChange}
          view="flex"
        />
      ) : (
        <ChannelAddModal
          setChannel={setChannel}
          setDescription={setDescription}
          submitChannel={submitChannel}
          viewChange={viewChange}
          view="none"
        />
      )}
    </Channel>
  );
};

export default Channels;
