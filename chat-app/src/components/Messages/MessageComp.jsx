import React from "react";
import { Comment } from "semantic-ui-react";
import moment from "moment";

const MessageComp = ({ message, user }) => {
  console.log("propsss", message);

  const isOwnMessage = (message, user) => {
    return message.user.id === user.uid ? "message_self" : "";
  };

  const timeFromNow = time => moment(time).fromNow();

  return (
    <Comment>
      <Comment.Avatar>{message.user.avatar}</Comment.Avatar>
      <Comment.Content className={isOwnMessage(message, user)}>
        <Comment.Author>{message.user.name}</Comment.Author>
        <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
        <Comment.Text>{message.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default MessageComp;
