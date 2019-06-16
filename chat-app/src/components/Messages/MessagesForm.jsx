import React, { useState } from "react";
import { Segment, Button, Input } from "semantic-ui-react";

const MessagesForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    const { firebaseRef } = props;
    if (message) {
      setLoading(true);
      
    }
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
