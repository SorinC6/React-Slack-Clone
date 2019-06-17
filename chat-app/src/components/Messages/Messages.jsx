import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessagesForm from "./MessagesForm";
import MessageComp from "./MessageComp";
import styled from "styled-components";
import firebase from "../../Firebase/firebaseConfig";

class Messages extends React.Component {
  // const [firebaseRef, setFirebaseRef] = useState(null);
  // const [messeges, setMesseges] = useState([]);
  // const [messegesLoading, setMessegesLoading] = useState(true);

  state = {
    firebaseRef: firebase.database().ref("messages"),
    messages: [],
    messegesLoading: true,
    currentChannel: this.props.currentChannel,
    currentUser: this.props.currentUser
  };

  componentDidMount() {
    // console.log(this.props);
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
      console.log(loadedMessages);
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
  render() {
    return (
      <MessagesWrapper>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="message">
            {this.displayMessages()}
          </Comment.Group>
        </Segment>
        <MessagesForm
          messagesRef={this.state.firebaseRef}
          currentChannel={this.props.currentChannel}
          user={this.props.currentUser}
        />
      </MessagesWrapper>
    );
  }
}

export default Messages;

const MessagesWrapper = styled.div`
  width: 50%;
`;
