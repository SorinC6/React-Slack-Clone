import React, { useState } from "react";
import firebase from "../../Firebase/firebaseConfig";
import { Segment, Button, Input } from "semantic-ui-react";

const MessagesForm = props => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const createMessage = () => {
    const messageBody = {
      content: message,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: props.user.uid,
        name: props.user.displayName,
        avatar: props.user.photoURL
      }
    };

    console.log(message);

    return messageBody;
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
        />
      </Button.Group>
    </Segment>
  );
};

export default MessagesForm;
