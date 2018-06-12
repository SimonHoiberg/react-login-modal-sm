> Customizable React Social Media login modal

A lightweight, customizable react component log-in modal including social media buttons.
No functionality is applied. Functions for click events can be passed via props.
As can varies options for text and behavior.

## :cloud: Installation

```sh
# Using npm
npm i react-sm-login-modal
```

## :mag_right: Preview
![image](https://github.com/Silind/react-sm-login-modal/blob/master/preview.png)

## :memo: Documentation

### Functions that can be passed via props
| Prop name | Description |
|-----------|-------------|
| `onLoginFacebook` | When user clicks on 'log in with Facebook' button |
| `onLoginGoogle` | When user clicks on 'log in with Google' button |
| `onLoginEmail` | When user clicks on 'log in with email' button. Passes (email, password) as parameters |
| `onSignupFacebook` | When user clicks on 'sign up with Facebook' button |
| `onSignupGoogle` | When user clicks on 'sign up with Google' button |
| `onSignupEmail` | When user clicks on 'sign up with email' button. Passes (email, username, password) as parameters |
| `onForgotPassword` | When user clicks on 'send new password' button. Passes (email) as parameter |

### Regular expressions that can be passed via props (Optional)
| Prop name | Description | Default value |
|-----------|-------------|---------------|
| `emailRegex` | Regex that defines correct email format | `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/` |
| `usernameRegex` | Regex that defines correct username format | `/^[a-zA-Z0-9_-]{5,}/` |
| `passwordRegex` | Regex that defines correct password format | `/^[a-zA-Z0-9_@!#()]{8,}/` |

### Custom labels
#### Default
```
{
  loginTitle: "Log in",
  signupTitle: "Create new user",
  forgotHeader: "Reset password",
  loginFacebookButton: "Log in with Facebook",
  loginGoogleButton: "Log in with Google",
  loginEmailButton: "Log in with email",
  signupFacebookButton: "Sign up with Facebook",
  signupGoogleButton: "Sign up with Google",
  signupEmailButton: "Sign up with email",
  forgotButton: "Send new password",
  loginEmailPlaceholder: "Type email",
  loginPasswordPlaceholder: "Type password",
  signupUsernamePlaceholder: "Type username",
  signupLink: "Create new user?",
  loginLink: "Already a user?",
  forgotLink: "Forgot password?",
  orLabel: "or"
}
```

## :clipboard: Example

```js

```

## :question: Get Help
1. Contact me on contact@silind.com
2. \- or if appropriate; raise an issue on Github