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

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    formError: null,
    loading: false
  };

  setError = errorMessage => {
    this.setState({
      formError: errorMessage
    });
  };
  setLoading = bool => {
    this.setState({
      loading: bool
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.formValid(this.state)) {
      this.setError(null);
      this.setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then()
        .catch();
    }
  };

  formValid = ({ emial, password }) => {
    return email && password;
  };

  handleInputError = inputName => {
    return this.state.formError &&
      this.state.formError.toLowerCase().includes(inputName)
      ? "error"
      : "";
  };

  render() {
    const { email, password, formError, loading } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="register">
        <Grid.Column style={{ maxWidth: 450 }} verticalAlign="middle">
          <Header as="h2" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet" />
            Login to Woop Chat
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked color="blue">
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="user email"
                onChange={this.handleChange}
                type="email"
                value={email}
                className={this.handleInputError("email")}
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
                className={this.handleInputError("password")}
                autoComplete="new-password"
              />

              <Button
                color="violet"
                fluid
                size="large"
                className={loading ? "loading" : ""}
                disabled={loading}
              >
                Login
              </Button>
            </Segment>
          </Form>

          {formError && (
            <Message error>
              <div>
                <h3>Error</h3>
                <p>{formError}</p>
              </div>
            </Message>
          )}

          <Message>
            Don't have an account? <Link to="/register">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
