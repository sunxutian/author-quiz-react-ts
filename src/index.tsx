import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import { AuthorQuiz } from './AuthorQuiz';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { appReducer } from './reducers/reducers_ext';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <AuthorQuiz />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
