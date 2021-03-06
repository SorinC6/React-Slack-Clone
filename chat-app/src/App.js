import React from "react";
import "./App.css";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import Messages from "./components/Messages/Messages";
import MetaPanel from "./components/MetaPanel/MetaPanel";
import styled from "styled-components";
import { connect } from "react-redux";
//sdsdsdsd
const App = props => {
  //console.log(props.currentChannel);
  return (
    <MainWrapper>
      <ColorPanel />
      <SidePanel user={props.user} />
      {props.currentChannel && (
        <Messages
          key={props.currentChannel && props.currentChannel.id}
          currentChannel={props.currentChannel}
          currentUser={props.user}
          isPrivateChannel={props.isPrivateChannel}
        />
      )}
      <MetaPanel />
    </MainWrapper>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
    currentChannel: state.channel.currentChannel,
    isPrivateChannel: state.channel.isPrivateChannel
  };
};

export default connect(mapStateToProps)(App);

const MainWrapper = styled.div`
  display: flex;
`;
