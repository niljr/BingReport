import React from 'react';
import NavigationBar from './NavigationBar';
import SignupForm from './SignupForm';

export default class SignupPage extends React.Component {
  render() {
    return (

      <div className="container">
        <NavigationBar />
        <div className="row">
          <div className="col-md-4 col-md-offetset-4">
            <SignupForm />
          </div>
        </div>
      </div>

    );
  }
}