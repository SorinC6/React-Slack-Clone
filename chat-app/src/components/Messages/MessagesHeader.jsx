import React from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

const MessegesHeader = () => {
  return (
    <Segment clearing>
      {/* Channel Title */}
      <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
        <span>
          Channel
          <Icon name={"star outline"} color="black" />
        </span>
        <Header.Subheader>2 Users</Header.Subheader>
      </Header>
      {/*  Search inputs for Channel */}
      <Header floated="right">
        <Input
          size="mini"
          icon="search"
          name="searchTerm"
          placeholder="search messages"
        />
      </Header>
    </Segment>
  );
};

export default MessegesHeader;
