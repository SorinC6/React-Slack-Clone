import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";

const SidePanel = props => {
  return (
    <Menu
      size="large"
      inverted
      vertical
      style={{
        background: "#85144b",
        fontSize: "22px",
        marginLeft: 50,
        marginTop: 0,
        height: "100vh"
      }}
    >
      <UserPanel />
      <Starred />
      <Channels />
      <DirectMessages currentUser={props.user} />
    </Menu>
  );
};

export default SidePanel;
