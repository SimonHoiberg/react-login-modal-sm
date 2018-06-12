import React, { Component } from "react";
import * as utils from "./utils.js";
import styles from "./login-modal.css";
import facebookIcon from "./graphics/facebook-icon.svg";
import googleIcon from "./graphics/gplus-icon.svg";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    emailFocused: false,
    passwordFocused: false
  };

  onEmailInputChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordInputChange = e => {
    this.setState({ password: e.target.value });
  };

  onEmailFocus = focus => () => {
    this.setState({ emailFocused: focus });
  };

  onPasswordFocus = focus => () => {
    this.setState({ passwordFocused: focus });
  };

  inputValidation = () => {
    const emailRegex = new RegExp(this.props.emailRegex);
    const passwordRegex = new RegExp(this.props.passwordRegex);
    return (
      emailRegex.test(this.state.email) &&
      passwordRegex.test(this.state.password)
    );
  };

  onLoginFacebook = () => {
    if (this.props.onLoginFacebook === undefined)
      console.warn("No function found: Pass a function as props; onLoginFacebook");
    else this.props.onLoginFacebook();
  };

  onLoginGoogle = () => {
    if (this.props.onLoginGoogle === undefined)
      console.warn("No function found: Pass a function as props; onLoginGoogle");
    else this.props.onLoginGoogle();
  };

  onLoginEmail = () => {
    if (!this.inputValidation()) return;
    if (this.props.onLoginEmail === undefined)
      console.warn("No function found: Pass a function as props; onLoginEmail");
    else this.props.onLoginEmail(this.state.email, this.state.password);
  };

  render() {
    const emailFocusStyle = utils.focusStyle(this.state.emailFocused);
    const passwordFocusStyle = utils.focusStyle(this.state.passwordFocused);
    const buttonDisabled = this.inputValidation() ? "" : styles.disabled;

    const facebookIconStyle = { backgroundImage: `url(${facebookIcon}` };
    const googleIconStyle = { backgroundImage: `url(${googleIcon})` };

    return (
      <div className={styles.loginForm}>
        <h1>{this.props.labels.loginTitle}</h1>

        <div
          className={[styles.loginBtn, styles.facebookBtnBg].join(" ")}
          onClick={this.onLoginFacebook}
        >
          <div
            className={[styles.facebookBtnLogo, styles.facebookBtnLogoBg].join(" ")}
            style={facebookIconStyle}
          />
          {this.props.labels.loginFacebookButton}
        </div>

        <div
          className={[styles.loginBtn, styles.googleBtnBg].join(" ")}
          onClick={this.onLoginGoogle}
        >
          <div
            className={[styles.googleBtnLogo, styles.googleBtnLogoBg].join(" ")}
            style={googleIconStyle}
          />
          {this.props.labels.loginGoogleButton}
        </div>

        <div className={styles.lineTextHolder}>
          <div className={styles.lineTextLine} />
          <div className={[styles.lineTextText, styles.center].join(" ")}>
            {this.props.labels.orLabel}
          </div>
        </div>

        <input
          type="text"
          style={emailFocusStyle}
          placeholder={this.props.labels.loginEmailPlaceholder}
          className={styles.loginInput}
          onChange={this.onEmailInputChange}
          value={this.state.email}
          onFocus={this.onEmailFocus(true)}
          onBlur={this.onEmailFocus(false)}
        />

        <input
          type="password"
          style={passwordFocusStyle}
          placeholder={this.props.labels.loginPasswordPlaceholder}
          className={styles.loginInput}
          onChange={this.onPasswordInputChange}
          value={this.state.password}
          onFocus={this.onPasswordFocus(true)}
          onBlur={this.onPasswordFocus(false)}
        />

        <div
          className={[styles.loginBtn, styles.emailBtnBg, buttonDisabled].join(
            " "
          )}
          onClick={this.onLoginEmail}
        >
          <div
            className={[styles.emailBtnLogo, styles.emailBtnLogoBg].join(" ")}
          >
            <i className={["material-icons", styles.emailLogo].join(" ")}>
              open_in_browser
            </i>
          </div>
          {this.props.labels.loginEmailButton}
        </div>
      </div>
    );
  }
}
