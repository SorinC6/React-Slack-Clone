import React from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

const MessegesHeader = props => {
  const {
    channelName,
    numUniqueUsers,
    handleSearcgChannel,
    searchLoading,
    isPrivateChannel
  } = props;

  return (
    <Segment clearing>
      {/* Channel Title */}
      <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
        <span>
          {channelName}
          {!isPrivateChannel && (
            <Icon name={"star outline"} color="black"  />
          )}
        </span>
        <Header.Subheader>{numUniqueUsers}</Header.Subheader>
      </Header>
      {/*  Search inputs for Channel */}
      <Header floated="right">
        <Input
          loading={searchLoading}
          onChange={handleSearcgChannel}
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
