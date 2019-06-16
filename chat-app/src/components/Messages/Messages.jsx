import React from "react";
import { Segment, Comment } from "semantic-ui-react";

const Messages = () => {
  return (
    <div>
      <MessagesHeader />

      <Segment>
        <Comment.Group className="message">ll</Comment.Group>
      </Segment>
      <MessagesForm />
    </div>
  );
};

export default Messages;
