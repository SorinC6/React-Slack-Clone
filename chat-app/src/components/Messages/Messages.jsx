import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessagesForm from "./MessagesForm";
import MessageComp from "./MessageComp";
import styled from "styled-components";
import firebase from "../../Firebase/firebaseConfig";

class Messages extends React.Component {
  state = {
    firebaseRef: firebase.database().ref("messages"),
    messages: [],
    messegesLoading: true,
    currentChannel: this.props.currentChannel,
    currentUser: this.props.currentUser
  };

  componentDidMount() {
    if (this.state.currentChannel && this.state.currentUser) {
      // debugger;
      this.addListeners(this.state.currentChannel.id);
    }
  }

  addListeners = channelId => {
    this.addMessageListener(channelId);
  };

  addMessageListener = channelId => {
    const loadedMessages = [];
    this.state.firebaseRef.child(channelId).on("child_added", snap => {
      //console.log(snap.val());
      loadedMessages.push(snap.val());
      this.setState({
        messages: loadedMessages,
        messegesLoading: true
      });
    });
  };

  displayMessages = () => {
    //debugger
    return (
      this.state.messages.length > 0 &&
      this.state.messages.map(item => {
        return (
          <MessageComp
            key={item.timestamp}
            message={item}
            user={this.props.currentUser}
          />
        );
      })
    );
  };

  displayChannelName = channel => (channel ? `#${channel.name}` : "");

  render() {
    //console.log(this.state.currentChannel.id);
    return (
      <MessagesWrapper>
        <MessagesHeader
          channelName={this.displayChannelName(this.state.currentChannel)}
        />

        <Segment>
          <Comment.Group className="mess">
            {this.displayMessages()}
          </Comment.Group>
        </Segment>
        <MessagesForm
          messagesRef={this.state.firebaseRef}
          currentChannel={this.state.currentChannel}
          user={this.state.currentUser}
        />
      </MessagesWrapper>
    );
  }
}

export default Messages;

const MessagesWrapper = styled.div`
  width: 50%;
`;
