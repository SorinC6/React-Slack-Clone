import React, { useState, useEffect } from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessagesForm from "./MessagesForm";
import styled from "styled-components";
import firebase from "../../Firebase/firebaseConfig";

const Messages = () => {
  const [firebaseRef, setFirebaseRef] = useState(null);

  useEffect(() => {
    setFirebaseRef(firebase.database().ref("messages"));
  }, []);

 

  return (
    <MessagesWrapper>
      <MessagesHeader />

      <Segment>
        <Comment.Group className="message">{/* Messages*/}</Comment.Group>
      </Segment>
      <MessagesForm messagesRef={firebaseRef} />
    </MessagesWrapper>
  );
};

export default Messages;

const MessagesWrapper = styled.div`
  width: 50%;
`;
