import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import AuthorQuiz from './AuthorQuiz';

import { getTurnData } from './initState/InitState';
import IAppStateModel from './models/IAppStateModel';
import registerServiceWorker from './registerServiceWorker';

const state: IAppStateModel = {
  next: getTurnData,
}

ReactDOM.render(
  <AuthorQuiz {...state} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
