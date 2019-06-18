import React from "react";
import { Comment, Image } from "semantic-ui-react";
import moment from "moment";

const MessageComp = ({ message, user }) => {
  const isOwnMessage = (message, user) => {
    return message.user.id === user.uid ? "message_self" : "";
  };

  const timeFromNow = time => moment(time).fromNow();

  const isImage = message => {
    //debugger
    return message.image && !message.content;
  };
  return (
    <Comment>
      <Comment.Avatar src={message.user.avatar} />
      <Comment.Content className={isOwnMessage(message, user)}>
        <Comment.Author>{message.user.name}</Comment.Author>
        <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
        <Image src={message.image} className="mess_image" />
        <Comment.Text className="text-mess">{message.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default MessageComp;
