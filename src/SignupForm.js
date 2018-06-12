import React, { Component } from "react";
import * as utils from "./utils.js";
import styles from "./login-modal.css";
import facebookIcon from "./graphics/facebook-icon.svg";
import googleIcon from "./graphics/gplus-icon.svg";

export default class SignupForm extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    emailFocused: false,
    usernameFocused: false,
    passwordFocused: false
  };

  onEmailInputChange = e => {
    this.setState({ email: e.target.value });
  };

  onUsernameInputChange = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordInputChange = e => {
    this.setState({ password: e.target.value });
  };

  onEmailFocus = focus => () => {
    this.setState({ emailFocused: focus });
  };

  onUsernameFocus = focus => () => {
    this.setState({ usernameFocused: focus });
  };

  onPasswordFocus = focus => () => {
    this.setState({ passwordFocused: focus });
  };

  inputValidation = () => {
    const emailRegex = new RegExp(this.props.emailRegex);
    const usernameRegex = new RegExp(this.props.usernameRegex);
    const passwordRegex = new RegExp(this.props.passwordRegex);
    return (
      emailRegex.test(this.state.email) &&
      usernameRegex.test(this.state.username) &&
      passwordRegex.test(this.state.password)
    );
  };

  onSignupFacebook = () => {
    if (this.props.onSignupFacebook === undefined)
      console.log("No Facebook signup function found");
    else this.props.onSignupFacebook();
  };

  onSignupGoogle = () => {
    if (this.props.onSignupGoogle === undefined)
      console.log("No Google signup function found");
    else this.props.onSignupGoogle();
  };

  onSignupEmail = () => {
    if (!this.inputValidation()) return;
    if (this.props.onSignupEmail === undefined)
      console.log("No Email signup function found");
    else
      this.props.onSignupEmail(
        this.state.email,
        this.state.username,
        this.state.password
      );
  };

  render() {
    const emailFocusStyle = utils.focusStyle(this.state.emailFocused);
    const usernameFocusStyle = utils.focusStyle(this.state.usernameFocused);
    const passwordFocusStyle = utils.focusStyle(this.state.passwordFocused);
    const buttonDisabled = this.inputValidation() ? "" : styles.disabled;

    const facebookIconStyle = { backgroundImage: `url(${facebookIcon}` };
    const googleIconStyle = { backgroundImage: `url(${googleIcon})` };

    return (
      <div className={styles.submitForm}>
        <h1>{this.props.labels.signupTitle}</h1>
        <div
          className={[styles.loginBtn, styles.facebookBtnBg].join(" ")}
          onClick={this.onSignupFacebook}
        >
          <div
            className={[styles.facebookBtnLogo, styles.facebookBtnLogoBg].join(" ")}
            style={facebookIconStyle}
          />
          {this.props.labels.signupFacebookButton}
        </div>

        <div
          className={[styles.loginBtn, styles.googleBtnBg].join(" ")}
          onClick={this.onSignupGoogle}
        >
          <div
            className={[styles.googleBtnLogo, styles.googleBtnLogoBg].join(" ")}
            style={googleIconStyle}
          />
          {this.props.labels.signupGoogleButton}
        </div>

        <div className={styles.lineTextHolder}>
          <div className={styles.lineTextLine} />
          <div className={[styles.lineTextText, styles.center].join(" ")}>
            {this.props.labels.orLabel}
          </div>
        </div>

        <input
          style={emailFocusStyle}
          type="text"
          placeholder={this.props.labels.loginEmailPlaceholder}
          name="submit_inp_email"
          id="submit_inp_email"
          className={styles.loginInput}
          onChange={this.onEmailInputChange}
          onFocus={this.onEmailFocus(true)}
          onBlur={this.onEmailFocus(false)}
          value={this.state.email}
        />

        <input
          style={usernameFocusStyle}
          type="text"
          placeholder={this.props.labels.signupUsernamePlaceholder}
          name="submit_inp_brugernavn"
          id="submit_inp_brugernavn"
          className={styles.loginInput}
          onChange={this.onUsernameInptChange}
          onFocus={this.onUsernameFocus(true)}
          onBlur={this.onUsernameFocus(false)}
          value={this.state.username}
        />

        <input
          style={passwordFocusStyle}
          type="password"
          placeholder={this.props.labels.loginPasswordPlaceholder}
          name="submit_inp_password"
          id="submit_inp_password"
          className={styles.loginInput}
          onChange={this.onPasswordInputChange}
          onFocus={this.onPasswordFocus(true)}
          onBlur={this.onPasswordFocus(false)}
          value={this.state.password}
        />

        <div
          className={[styles.loginBtn, styles.emailBtnBg, buttonDisabled].join(" ")}
          onClick={this.onSignupEmail}
        >
          <div
            className={[styles.emailBtnLogo, styles.emailBtnLogoBg].join(" ")}
          >
            <i className={["material-icons", styles.emailLogo].join(" ")}>
              open_in_browser
            </i>
          </div>
          {this.props.labels.signupEmailButton}
        </div>
      </div>
    );
  }
}
