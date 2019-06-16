import React, { useState, useEffect } from "react";
import {
  Grid,
  GridColumn,
  Header,
  Icon,
  Dropdown,
  Image
} from "semantic-ui-react";
import firebase from "../../Firebase/firebaseConfig";
import { connect } from "react-redux";

const UserPanel = props => {
  const [user, setUser] = useState("");
  const [userPhotoURL, setUserPhotoURL] = useState("");

  useEffect(() => {
    props.user && setUser(props.user);
    props.userURL && setUserPhotoURL(props.userURL);
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
          <Dropdown
            trigger={
              <span>
                {<Image src={userPhotoURL} spaced="right" avatar />} {user}
              </span>
            }
            options={dropDownOption()}
          />
        </Header>
      </GridColumn>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.currentUser.displayName,
    userURL: state.user.currentUser.photoURL
  };
};

export default connect(mapStateToProps)(UserPanel);
