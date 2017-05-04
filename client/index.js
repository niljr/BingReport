import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import SignupPage from './components/SignupPage';

const Root = () => {

  const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App} />
          <Match pattern="/signup" component={SignupPage} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}


render(<Root />, document.querySelector('#app'));