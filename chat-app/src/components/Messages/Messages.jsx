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
    currentUser: this.props.currentUser,
    numberOfUnique: "",
    searchTerm: "",
    searchLoading: false,
    searchResults: []
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
      this.countUniqueUsers(loadedMessages);
    });
  };

  countUniqueUsers = messeges => {
    const uniqueUsers = messeges.reduce((acc, mess) => {
      if (!acc.includes(mess.user.name)) {
        acc.push(mess.user.name);
      }
      return acc;
    }, []);

    const plural = uniqueUsers.length > 1 || uniqueUsers.length === 0;
    this.setState({
      numberOfUnique: `${uniqueUsers.length} user${plural ? "s" : ""}`
    });
  };

  displayMessages = messeges => {
    //debugger
    return (
      messeges.length > 0 &&
      messeges.map(item => {
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

  handleSearchChannel = event => {
    this.setState(
      {
        searchTerm: event.target.value,
        searchLoading: true
      },
      () => this.handleSearchMesseges()
    );
  };

  handleSearchMesseges = () => {
    const channelMessages = [...this.state.messages];
    const regex = new RegExp(this.state.searchTerm, "gi");
    const searchResults = channelMessages.reduce((acc, message) => {
      if (message.content && message.content.match(regex)) {
        acc.push(message);
      }
      return acc;
    }, []);
    this.setState({
      searchResults
    });
  };

  render() {
    //console.log(this.state.currentChannel.id);
    return (
      <MessagesWrapper>
        <MessagesHeader
          channelName={this.displayChannelName(this.state.currentChannel)}
          numUniqueUsers={this.state.numberOfUnique}
          handleSearcgChannel={this.handleSearchChannel}
        />

        <Segment>
          <Comment.Group className="mess">
            {this.state.searchTerm
              ? this.displayMessages(this.state.searchResults)
              : this.displayMessages(this.state.messages)}
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
