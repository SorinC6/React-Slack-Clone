import React, { useState, useEffect } from "react";
import firebase from "../../Firebase/firebaseConfig";
import uuid4 from "uuid/v4";
import { Segment, Button, Input } from "semantic-ui-react";
import FileModal from "./FileModal";
import { setTimeout } from "timers";

const MessagesForm = props => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [uploadTask, setUploadTask] = useState(null);
  const [uploadState, setUploadState] = useState("");
  const [storageRef, setStorageRef] = useState(firebase.storage().ref());
  const [procentUpload, setProcentUpload] = useState(0);

  useEffect(() => {
    const ref = props.messagesRef;
    const pathUpload = props.currentChannel.id;
    //debugger;
    uploadTask &&
      uploadTask.on(
        "state_changed",
        snap => {
          //debugger;
          const procentUploaded = Math.round(
            (snap.bytesTransferred / snap.totalBytes) * 100
          );
          setProcentUpload(procentUploaded);
        },
        err => {
          //debugger;
          setError(err);
          setUploadState(err);
          setUploadTask(null);
        },
        () => {
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then(downloadUrl => {
              //debugger;
              sendFileMessage(downloadUrl, ref, pathUpload);
            })
            .catch(err => {
              // debugger;
              setError(err);
              setUploadState(err);
              setUploadTask(null);
            });
        }
      );
  }, [uploadTask]);

  const sendMessage = () => {
    setError("");
    const { messagesRef } = props;
    if (message.length > 0 && props.user.uid) {
      setLoading(true);
      messagesRef
        .child(props.currentChannel.id)
        .push()
        .set(createMessage())
        .then(() => {
          setLoading(false);
          setMessage("");
          setError("");
        })
        .catch(err => {
          setError(err);
        });
    } else {
      setError("Add a message");
    }
  };

  const createMessage = (fileUrl = null) => {
    debugger
    const messageBody = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: props.user.uid,
        name: props.user.displayName,
        avatar: props.user.photoURL
      },
      content: message || "",
      image: fileUrl || ""
    };
    console.log(messageBody);
    // if (fileUrl !== null) {
    //   debugger;
    //   messageBody["image"] = fileUrl;
    // } else {
    //   messageBody["content"] = message;
    // }
    return messageBody;
  };

  const uploadFile = (file, metadata) => {
    console.log(file, metadata);
    const pathUpload = props.currentChannel.id;
    const ref = props.messagesRef;
    const filePath = `chat/public/${uuid4()}.jpg`;

    setUploadState("uploading...");
    setUploadTask(storageRef.child(filePath).put(file, metadata));
  };

  const sendFileMessage = (fileUrl, ref, pathToUpload) => {
   //debugger;
    ref
      .child(pathToUpload)
      .push()
      .set(createMessage(fileUrl))
      .then(() => {
        setUploadState("Done");
      })
      .catch(err => {
        setError(err);
      });
  };

  return (
    <Segment className="segment_form">
      <Input
        fluid
        onChange={e => setMessage(e.target.value)}
        name="message"
        style={{ marginBottom: "0.7em" }}
        label={<Button icon={"add"} />}
        labelPosition="left"
        placeholder="write your message"
        className={error.includes("message") ? "error" : ""}
        value={message}
      />
      <Button.Group icon widths="2">
        <Button
          onClick={sendMessage}
          disabled={loading}
          color="orange"
          content="Add Reply"
          labelPosition="left"
          icon="edit"
        />
        <Button
          color="teal"
          content="Upload Media"
          labelPosition="right"
          icon="cloud upload"
          onClick={() => setModal(true)}
        />

        <FileModal
          modal={modal}
          closeModal={() => setModal(false)}
          uploadFile={uploadFile}
        />
      </Button.Group>
    </Segment>
  );
};

export default MessagesForm;
