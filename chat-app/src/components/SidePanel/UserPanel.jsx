import React from "react";
import { Grid, GridColumn, Header, Icon, Dropdown } from "semantic-ui-react";

const UserPanel = () => {
  const dropDownOption = () => {
    return [
      {
        key: "user",
        text: (
          <span>
            Signen id as <strong>User</strong>
          </span>
        ),
        disable: true
      },
      {
        key: "avatar",
        text: <span>Change Avatar</span>
      },
      {
        key: "signout",
        text: <span>Sign Out</span>
      }
    ];
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
        <Header as="h4">
          <Dropdown trigger={<span>User</span>} options={dropDownOption()} />
        </Header>
      </GridColumn>
    </Grid>
  );
};

export default UserPanel;
