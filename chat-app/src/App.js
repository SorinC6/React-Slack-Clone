import React from "react";
import "./App.css";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import Messages from "./components/Messages/Messages";
import MetaPanel from "./components/MetaPanel/MetaPanel";
import styled from "styled-components";
import { connect } from "react-redux";

const App = props => {
  return (
    <MainWrapper>
      <ColorPanel />
      <SidePanel />
      <Messages
        currentChannel={props.currentChannel}
        currentUser={props.user}
      />
      <MetaPanel />
    </MainWrapper>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
    currentChannel: state.channel.currentChannel
  };
};

export default connect(mapStateToProps)(App);

const MainWrapper = styled.div`
  display: flex;
`;
