import React from 'react';
import NavigationBar from './NavigationBar';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (

      <div className="container">
        <NavigationBar />
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm userSignupRequest={userSignupRequest} />
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.protoTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);