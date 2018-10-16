import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import AuthorQuiz from './AuthorQuiz';

import { getTurnData } from './initState/InitState';
import registerServiceWorker from './registerServiceWorker';
import { IAppState } from './types';

ReactDOM.render(
  <AuthorQuiz />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
