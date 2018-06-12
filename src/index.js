import React, { Component } from "react";
import * as utils from './utils.js';
import LoginForm from './LoginForm.js';
import SignupForm from './SignupForm.js';
import ForgotForm from './ForgotForm.js'
import styles from './login-modal.css';

class LoginModal extends Component {
  state = {
    subpageShown: 0
  };

  switchSubpage = to => e => {
    this.setState({ subpageShown: to });
  };

  modalLabels = () =>
    this.props.labels !== undefined ? this.props.labels : utils.labels;

  emailRegex = () => 
    this.props.emailRegex !== undefined ? this.props.emailRegex : utils.emailRegex;

  usernameRegex = () => 
    this.props.usernameRegex !== undefined ? this.props.usernameRegex : utils.usernameRegex;

  passwordRegex = () => 
    this.props.passwordRegex !== undefined ? this.props.passwordRegex : utils.passwordRegex;

  closeModal = () => {
    if (this.props.toggleModal === undefined)
      console.log("toggleModal function not found");
    else this.props.toggleModal();
  }
  
  bottomLinks = () => {
    const links = [];
    if (this.state.subpageShown !== 0)
      links.push(
        <div
          key={0}
          className={[styles.loginLinks, styles.loginLinksCol].join(' ')}
          onClick={this.switchSubpage(0)}
        >
          {this.modalLabels().loginLink}
        </div>
      );
    if (this.state.subpageShown !== 1)
      links.push(
        <div
          key={1}
          className={[styles.loginLinks, styles.loginLinksCol].join(' ')}
          onClick={this.switchSubpage(1)}
        >
          {this.modalLabels().signupLink}
        </div>
      );
    if (this.state.subpageShown !== 2)
      links.push(
        <div
          key={2}
          className={[styles.loginLinks, styles.loginLinksCol].join(' ')}
          onClick={this.switchSubpage(2)}
        >
          {this.modalLabels().forgotLink}
        </div>
      );
    return links;
  };

  render() {
    if (!this.props.showModal) return false;

    const loginForms = [
      <LoginForm 
        labels={this.modalLabels()} 
        emailRegex={this.emailRegex()}
        passwordRegex={this.passwordRegex()}
        onLoginFacebook={this.props.onLoginFacebook}
        onLoginGoogle={this.props.onLoginGoogle}
        onLoginEmail={this.props.onLoginEmail}
        />,
      <SignupForm
        labels={this.modalLabels()} 
        emailRegex={this.emailRegex()}
        usernameRegex={this.usernameRegex()}
        passwordRegex={this.passwordRegex()}
        onSignupFacebook={this.props.onSignupFacebook}
        onSignupGoogle={this.props.onSignupGoogle}
        onSignupEmail={this.props.onSignupEmail}
        />,
      <ForgotForm
        labels={this.modalLabels()} 
        emailRegex={this.emailRegex()}
        onForgotPassword={this.props.onForgotPassword}
        />
    ];

    return (
      <div>
        <div className={styles.bgMatte} onClick={this.closeModal}></div>

        <div className={styles.logInHolder}>
          <div className={[styles.logInTopRow, styles.center].join(' ')}>
            <i className={["material-icons", styles.floatRight, styles.logInCloseBtn].join(' ')} onClick={this.closeModal}>close</i>
          </div>

          {loginForms[this.state.subpageShown]}

          <div className={styles.loginLinksHolder}>{this.bottomLinks()}</div>
        </div>
      </div>
    );
  }
}

export default LoginModal;