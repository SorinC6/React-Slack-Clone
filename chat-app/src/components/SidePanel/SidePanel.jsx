import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";

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
    </Menu>
  );
};

export default SidePanel;
