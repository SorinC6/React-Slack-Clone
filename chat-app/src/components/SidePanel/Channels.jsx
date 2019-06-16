import React, { useState, useEffect } from "react";
import firebase from "../../Firebase/firebaseConfig";
import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../store/actions/index";

const Channel = props => {
  const [user, setUser] = useState("");
  const [userPhotoURL, setUserPhotoURL] = useState("");
  const [channels, setChannels] = useState([]);
  const [channelName, setChannelName] = useState("");
  const [channelDetail, setChannelDetail] = useState("");
  const [activeChannel, setActiveChannelId] = useState("");
  const [modal, setModal] = useState(false);
  const [channelRef, setChannelRef] = useState(
    firebase.database().ref("channels")
  );

  useEffect(() => {
    addEventListener();
    props.user && setUser(props.user);
    props.userURL && setUserPhotoURL(props.userURL);
  }, [channels.length]);

  useEffect(() => {
    return () => {
      channelRef.off();
    };
  }, []);

  const addEventListener = () => {
    let loadedChannels = [];
    channelRef.on("child_added", snap => {
      loadedChannels.push(snap.val());
      setChannels(loadedChannels);
      setFirstChannel();
    });
  };

  const setFirstChannel = () => {
    const firstChannel = channels[0];
    channels.length > 0 &&
      props.setCurrentChannel(firstChannel) &&
      setActiveChannelId(firstChannel);
  };

  const addChannel = () => {
    const key = channelRef.push().key;
    debugger;
    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetail,
      createdAt: {
        name: user,
        avatar: userPhotoURL
      }
    };

    channelRef
      .child(key)
      .update(newChannel)
      .then(() => {
        setChannelName("");
        setChannelDetail("");
        setModal(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("channeladded");
      addChannel();
    }
  };

  const isFormValid = () => {
    return channelName && channelDetail;
  };

  const setActiveChannel = channel => {
    setActiveChannelId(channel.id);
  };

  const changeChannel = channel => {
    //setting the channel
    setActiveChannel(channel);
    props.setCurrentChannel(channel);
  };

  return (
    <div>
      <Menu.Menu style={{ paddingBottom: "2em" }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> Channels {channels.length}
          </span>
          {} <Icon name="add" onClick={() => setModal(true)} />
        </Menu.Item>
        {channels.length > 0 &&
          channels.map(channel => {
            return (
              <Menu.Item
                key={channel.id}
                onClick={() => changeChannel(channel)}
                name={channel.name}
                style={{ opacity: 0.7 }}
                active={channel.id === activeChannel}
              >
                # {channel.name}
              </Menu.Item>
            );
          })}
      </Menu.Menu>
      <Modal basic open={modal} onClose={() => setModal(false)}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
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
        <Modal.Actions>
          <Button color="yellow" inverted onClick={handleSubmit}>
            <Icon name="checkmark" /> Add
          </Button>
          <Button color="red" inverted onClick={() => setModal(false)}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.currentUser.displayName,
    userURL: state.user.currentUser.photoURL
  };
};

const mapDispatchToProps = {
  setCurrentChannel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
