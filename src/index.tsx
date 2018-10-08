import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import './index.css';

import { authors } from './initState/InitState';
import IAppStateModel from './models/IAppStateModel';
import registerServiceWorker from './registerServiceWorker';

const state: IAppStateModel = {
  turnData: authors[0]
}

ReactDOM.render(
  <AuthorQuiz {...state} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
