import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

import { Provider } from 'react-redux';
import { ConnectedAuthorQuiz } from './containers/AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedAuthorQuiz />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
