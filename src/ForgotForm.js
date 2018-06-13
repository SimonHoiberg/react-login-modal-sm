import React, { Component } from 'react';
import * as utils from './utils.js';
import styles from "./login-modal.css";

export default class ForgotForm extends Component {
  state = {
    email: "",
    emailFocused: false
  };

  onEmailInputChange = e => {
    this.setState({ email: e.target.value });
  };

  onEmailFocus = focus => () => {
    this.setState({ emailFocused: focus });
  };

  inputValidation = () => {
    const emailRegex = new RegExp(this.props.emailRegex);
    return emailRegex.test(this.state.email);
  }

  onForgotPassword = () => {
    if (!this.inputValidation()) return;
    if (this.props.onForgotPassword === undefined)
      console.warn("No function found: Pass a function as props; onForgotPassword");
    else this.props.onForgotPassword(this.state.email);
  }

  render() {
    const emailFocusStyle = utils.focusStyle(this.state.emailFocused);
    const buttonDisabled = (this.inputValidation()) ? "" : styles.disabled;

    return (
      <div className={styles.forgotForm}>
        <h1>{this.props.labels.forgotTitle}</h1>

        <input
          style={emailFocusStyle}
          type="text"
          placeholder={this.props.labels.loginEmailPlaceholder}
          className={styles.loginInput}
          onChange={this.onEmailInputChange}
          onFocus={this.onEmailFocus(true)}
          onBlur={this.onEmailFocus(false)}
        />

        <div className={[styles.loginBtn, styles.emailBtnBg, buttonDisabled].join(" ")} onClick={this.onForgotPassword}>
          <div className={[styles.emailBtnLogo, styles.emailBtnLogoBg].join(" ")}>
            <i className={["material-icons", styles.emailLogo].join(" ")}>open_in_browser</i>
          </div>
          {this.props.labels.forgotButton}
        </div>
      </div>
    );
  }
}