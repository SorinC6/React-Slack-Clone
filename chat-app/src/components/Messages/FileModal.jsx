import React, { useState } from "react";
import mime from "mime-types";
import { Modal, Input, Button, Icon, IconGroup } from "semantic-ui-react";

const FileModal = props => {
  const { modal, closeModal } = props;
  const [file, setFile] = useState(null);
  const [autorizedFile, setAuthorizedFile] = useState([
    "image/jpeg",
    "image/png"
  ]);

  const sendFile = () => {
    if (file) {
      if (isAuthorized(file.name)) {
        const metadata = { contentType: mime.lookup(file.name) };
        props.uploadFile(file, metadata);
        props.closeModal();
        clearFile();
      }
    }
  };

  const clearFile = () => setFile(null);

  const isAuthorized = fileName => {
    return autorizedFile.includes(mime.lookup(fileName));
  };

  return (
    <Modal basic open={modal} onClose={closeModal}>
      <Modal.Header>Select a image File</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          label="File types: jpg, png"
          name="file"
          type="file"
          onChange={e => {
            const fileDoc = e.target.files[0];
            console.log(fileDoc);
            if (fileDoc) {
              setFile(fileDoc);
            }
          }}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={sendFile}>
          <Icon name="checkmark" /> Send
        </Button>
        <Button color="red" inverted onClick={closeModal}>
          <Icon name="remove" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default FileModal;
