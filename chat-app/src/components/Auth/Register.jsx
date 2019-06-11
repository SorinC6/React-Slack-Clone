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
import firebase from "../../Firebase/firebaseConfig";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfiramtion: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(createdUser => {
        console.log(createdUser);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { username, email, password, passwordConfiramtion } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="register">
        <Grid.Column style={{ maxWidth: 450 }} verticalAlign="middle">
          <Header as="h2" icon color="purple" textAlign="center">
            <Icon name="rocketchat" color="purple" />
            Register
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked color="blue">
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="username..."
                onChange={this.handleChange}
                type="text"
                value={username}
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="user email"
                onChange={this.handleChange}
                type="email"
                value={email}
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="password"
                onChange={this.handleChange}
                type="password"
                value={password}
              />
              <Form.Input
                fluid
                name="passwordConfiramtion"
                icon="lock"
                iconPosition="left"
                placeholder="password confirmation"
                onChange={this.handleChange}
                type="password"
                value={passwordConfiramtion}
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
