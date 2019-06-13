import React, { useState } from "react";
import { Menu, Icon, Modal, Form, Input } from "semantic-ui-react";

const Channels = props => {
  const [channels, setChannels] = useState([]);
  const [channelName, setChannelName] = useState("");
  const [channelDetail, setChannelDetail] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <Menu.Menu style={{ paddingBottom: "2em" }}>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> Channels
        </span>
        {} <Icon name="add" />
      </Menu.Item>
      <Modal basic open={modal} onClose={() => setModal(false)}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Input
                fluid
                label="Name of channel"
                name="channelName"
                onChange={e => setChannelName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="About the Channel"
                name="channelDetail"
                onChange={e => setChannelDetail(e.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    </Menu.Menu>
    //add channel modal
  );
};

export default Channels;
