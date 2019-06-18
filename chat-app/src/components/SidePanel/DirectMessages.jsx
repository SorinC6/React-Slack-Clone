import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";

const DirectMessages = () => {
  const [users, setUsers] = useState([]);

  return (
    <Menu.Menu className="menu">
      <Menu.Item>
        <span>
          <Icon name="mail" /> Direct Messages
        </span>{" "}
        {users.length}
      </Menu.Item>
      {/* Users to sent direct messages */}
    </Menu.Menu>
  );
};

export default DirectMessages;
