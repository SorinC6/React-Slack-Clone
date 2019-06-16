import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";

const SidePanel = () => {
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
      <Channels />
    </Menu>
  );
};

export default SidePanel;
