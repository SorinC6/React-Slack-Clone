import React from "react";
import "./App.css";
import { Grid, GridColumn } from "semantic-ui-react";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import Messages from "./components/Messages/Messages";
import MetaPanel from "./components/MetaPanel/MetaPanel";

const App = () => (
  <Grid
    columns="equal"
    className="app"
    style={{ background: "#eee", height: "50px" }}
  >
    <Grid.Column>
      <ColorPanel />
    </Grid.Column>
    <Grid.Column>
      <SidePanel />
    </Grid.Column>
    <Grid.Column>
      <Messages />
    </Grid.Column>
    <Grid.Column>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

export default App;
