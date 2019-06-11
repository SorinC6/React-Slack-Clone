import React from "react";
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Icon,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  handleChange = () => {};

  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="register">
        <Grid.Column style={{ maxWidth: 450 }} verticalAlign="middle">
          <Header as="h2" icon color="purple" textAlign="center">
            <Icon name="rocketchat" color="purple" />
            Register
          </Header>
          <Form size="large">
            <Segment stacked color="blue">
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="username..."
                onChange={this.handleChange}
                type="text"
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="user email"
                onChange={this.handleChange}
                type="email"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="password"
                onChange={this.handleChange}
                type="password"
              />
              <Form.Input
                fluid
                name="passwordConfiramtion"
                icon="lock"
                iconPosition="left"
                placeholder="password confirmation"
                onChange={this.handleChange}
                type="password"
              />
              <Button color="purple" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Aleardy a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
