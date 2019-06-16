import React from "react";
import "./App.css";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import Messages from "./components/Messages/Messages";
import MetaPanel from "./components/MetaPanel/MetaPanel";
import styled from "styled-components";
import { connect } from "react-redux";

const App = () => (
  <MainWrapper>
    <ColorPanel />
    <SidePanel />
    <Messages />
    <MetaPanel />
  </MainWrapper>
);

const mapStateToProps = state => {
  return {
    currentChannel: state.channel.currentChannel
  };
};

export default connect()(App);

const MainWrapper = styled.div`
  display: flex;
`;
