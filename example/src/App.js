import React, { Component } from 'react'
import LoginModal from 'react-sm-login-modal'

class App extends Component {
  state = {
    showModal: false,
  }

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className="App">
        <LoginModal 
          showModal={this.state.showModal}
          toggleModal={this.showModal}
          onSignupEmail={this.signupMail}
        />
        <div className="test-btn" onClick={this.showModal} />
      </div>
    );
  }
}

export default App;