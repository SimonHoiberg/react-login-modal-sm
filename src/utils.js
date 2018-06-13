export const labels = {
  loginTitle: "Log in",
  signupTitle: "Create new user",
  forgotTitle: "Reset password",
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
};

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const usernameRegex = /^[a-zA-Z0-9_-]{5,}/;
export const passwordRegex = /^[a-zA-Z0-9_@!#()]{8,}/;

export const focusStyle = focus =>
  focus
  ? { backgroundColor: "#fff" }
  : { backgroundColor: "#e6e7f2" };