import React, { Component } from "react";
import LoginModal from "react-sm-login-modal";

class App extends Component {
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleLoginWithFacebook = () => {
    // Do something when 'Login with Facebook' is clicked
    console.log("Login with Facebook...");
  };

  handleSignupByEmail = () => {
    // Do something when 'Signup by email' is clicked
    console.log("Sign up by email...");
  };

  render() {

    const customUsernameRegex = /^[a-zA-Z0-9_]{5,}/;

    return (
      <div className="App">
        <h1>react-sm-login-modal example</h1>

        <LoginModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          onLoginFacebook={this.handleLoginWithFacebook}
          onSignupEmail={this.handleSignupByEmail}
          usernameRegex={customUsernameRegex}
        />

        <button
          className="test-btn btn btn-primary btn-lg"
          onClick={this.toggleModal}
        >
          Log in
        </button>
      </div>
    );
  }
}

export default App;
