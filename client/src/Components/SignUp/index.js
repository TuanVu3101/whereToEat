import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../base";
import SignUpView from "./SignUpView";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
          alert("Created user " + email.value);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);
