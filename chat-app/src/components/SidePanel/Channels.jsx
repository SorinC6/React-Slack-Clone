import React, { useState } from "react";
import { Menu, Icon, Modal } from "semantic-ui-react";

const Channels = props => {
  const [channels, setChannels] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <Menu.Menu style={{ paddingBottom: "2em" }}>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> Channels
        </span>
        {} <Icon name="add" />
      </Menu.Item>
    </Menu.Menu>
    //add channel modal
  );
};

export default Channels;
