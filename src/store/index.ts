import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from 'src/epic/rootEpic';
import { initState } from 'src/initState/InitState';
import { AppActions, combinedAppReducer } from 'src/reducers/reducers_ext';
import { IDependencyServices } from 'src/services';
import { LocalAuthorService } from 'src/services/authorService';
import { LoadCounterService } from 'src/services/loadCountService';
import { IAppState } from 'src/types';

export const epicMiddleware = createEpicMiddleware<AppActions, AppActions, IAppState, IDependencyServices>({
  dependencies: { authorService: new LocalAuthorService(), loadingCounterService: new LoadCounterService() }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState?: IAppState) {
  return createStore(combinedAppReducer, initialState!,
    composeEnhancers(applyMiddleware(epicMiddleware)));
}

// pass an optional param to rehydrate state on app start
const store = configureStore({
  fetchPercentage: 0,
  isFetching: false,
  turnData: initState,
});
epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;