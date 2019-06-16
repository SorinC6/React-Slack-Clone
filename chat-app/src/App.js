import React from "react";
import "./App.css";
import { Grid, Segment, GridColumn } from "semantic-ui-react";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import Messages from "./components/Messages/Messages";
import MetaPanel from "./components/MetaPanel/MetaPanel";
import styled from "styled-components";

const App = () => (
  <MainWrapper>
    <ColorPanel />
    <SidePanel />
    <Messages />
    <MetaPanel />
  </MainWrapper>
);

export default App;

const MainWrapper = styled.div`
  display: flex;
`;
