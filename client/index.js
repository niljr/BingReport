import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import SignupPage from './components/SignupPage';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/signup" component={SignupPage} />
      </div>
    </BrowserRouter>
  )
}


render(<Root />, document.querySelector('#app'));