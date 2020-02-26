/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { faPlus, faStar, faSearch } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import {
  Container,
  HeaderContainer,
  MessageContainer,
  InputContainer,
  Icon,
  SearchContainer,
  Messages
} from "./MessageStyled";

import FileModal from "../Modals/FileModal";

const timenow = time => moment(time).fromNow();

const Message = ({ handleSearch ,setMessage, sendMessage, message, messages, addFile, sendfile, channelName, numberOfUsers }) => {
  const [view, setView] = useState(false);
  const viewChange = () => setView(false);
  return (
    <Container>
      <HeaderContainer>
   
        <div>
          <div>
            <h1>{channelName}</h1>
            <Icon icon={faStar} color="black" />
          </div>
          <span>{numberOfUsers}</span>
        </div>
        <SearchContainer>
          <input onChange={handleSearch} type="text" placeholder="Search" />
          <Icon icon={faSearch} color="black" />
        </SearchContainer>
      </HeaderContainer>
      <MessageContainer>
        {messages.map((m, i) => (
          <Messages key={i}>
            <div>
              <img src={m.user.avatar} />
            </div>
            <span />
            <section>
              <div>
                <h1>{m.user.name}</h1>
                <span>{timenow(m.time)}</span>
              </div>
              <div>
                <span>{m.content}</span>
                <img src={m.image} />
              </div>
            </section>
          </Messages>
        ))}
      </MessageContainer>
      <InputContainer>
        <div>
          <Icon icon={faPlus} color="black" />
          <input
            value={message}
            type="text"
            placeholder="Write Message"
            onChange={setMessage}
          />
        </div>
        
        <div>
          
          <button onClick={() => sendMessage()}>Add Reply</button>
          <button onClick={() => setView(true)}>Upload Media</button>
         
        </div>
      </InputContainer>
      {view ? (
        <FileModal sendfile={sendfile} addFile={addFile} viewChange={viewChange} view="flex" />
      ) : (
        <FileModal viewChange={viewChange} view="none" />
      )}
    </Container>
  );
};
export default Message;
