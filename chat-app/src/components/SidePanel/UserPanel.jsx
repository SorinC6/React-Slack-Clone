import React, { useState, useEffect } from "react";
import { Grid, GridColumn, Header, Icon, Dropdown } from "semantic-ui-react";
import firebase from "../../Firebase/firebaseConfig";
import { connect } from "react-redux";

const UserPanel = props => {
  const [user, setUser] = useState("");

  useEffect(() => {
    props.user && setUser(props.user);
  });
  const dropDownOption = () => {
    return [
      {
        key: "user",
        text: (
          <span>
            SignIn as <strong>{user}</strong>
          </span>
        )
        //disable: true
      },
      {
        key: "avatar",
        text: <span>Change Avatar</span>
      },
      {
        key: "signout",
        text: <span onClick={handleSignout}>Sign Out</span>
      }
    ];
  };

  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signOut"));
  };

  return (
    <Grid style={{ background: "" }}>
      <GridColumn>
        <Grid.Row style={{ padding: "20px", margin: 0 }}>
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <Header.Content>WoopChat</Header.Content>
          </Header>
        </Grid.Row>
        <Header as="h4" style={{ padding: "20px" }}>
          <Dropdown trigger={<span>User</span>} options={dropDownOption()} />
        </Header>
      </GridColumn>
    </Grid>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user.currentUser.displayName
  };
};

export default connect(mapStateToProps)(UserPanel);
