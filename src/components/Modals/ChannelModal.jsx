import React from "react";
import { Modal } from "./ModalStyled";

const ChannelAddModal = ({
  view,
  viewChange,
  setChannel,
  setDescription,
  submitChannel
}) => (
  <Modal view={view}>
    <div>
      <input onChange={setChannel} type="text" placeholder="Channel Name" />
      <input onChange={setDescription} type="text" placeholder="Description" />
      <div>
        <button
          onClick={() => {
            submitChannel();
            viewChange();
          }}
        >
          Add Channel
        </button>
        <button onClick={() => viewChange()}>Close</button>
      </div>
    </div>
  </Modal>
);

export default ChannelAddModal;
