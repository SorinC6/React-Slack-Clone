import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessagesForm from "./MessagesForm";
import styled from "styled-components";

const Messages = () => {
  return (
    <MessagesWrapper>
      <MessagesHeader />

      <Segment>
        <Comment.Group className="message">{/* Messages*/}</Comment.Group>
      </Segment>
      <MessagesForm />
    </MessagesWrapper>
  );
};

export default Messages;

const MessagesWrapper = styled.div`
  width: 50%;
`;
