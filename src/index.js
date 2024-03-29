import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

//import reducers from './reducers';
import routes from './routes';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#container'));
