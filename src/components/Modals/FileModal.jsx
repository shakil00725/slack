import React from "react";
import { Modal } from "./ModalStyled";

const FileModal = ({ view, viewChange, addFile, sendfile }) => (
  <Modal view={view}>
    <div>
      <label>Select a image file:</label>
      <input onChange={addFile} type="file" />
      <div>
        <button
          onClick={() => {
            sendfile()
            viewChange();
          }}
        >
          Upload image
        </button>
        <button onClick={() => viewChange()}>Close</button>
      </div>
    </div>
  </Modal>
);

export default FileModal;
