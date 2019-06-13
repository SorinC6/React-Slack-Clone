import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";

const SidePanel = () => {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: "#85144b", fontSize: "22px" }}
    >
      <UserPanel />
      <Channels />
    </Menu>
  );
};

export default SidePanel;
