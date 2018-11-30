import { combineEpics, Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { IDependencyServices } from 'src/services';
import { IAppState } from 'src/types';
import { isActionOf } from 'typesafe-actions';
import { log } from 'util';
import { cancelFetchNext, continueNext, fetchNextTurn, fetchPercentageReport } from '../actions';
import { AppActions } from '../reducers/reducers_ext';

const fetchAction: Epic<AppActions, AppActions, IAppState, IDependencyServices> = (
    action$, store, service
) => action$.pipe(
    filter(isActionOf(fetchNextTurn.request)),
    tap(action => {
        log(action.type);
    }),
    mergeMap(action => from(service.authorService.getNextTurnData()).pipe(
        map(data => fetchNextTurn.success(data)),
        takeUntil(action$.pipe(filter(isActionOf(cancelFetchNext)))),
        catchError((e: Error) => of(fetchNextTurn.failure(e)))
    ))
);

const startLoadingCounterAction: Epic<AppActions, AppActions, IAppState, IDependencyServices> = (
    action$, store, service
) => action$.pipe(
    filter(isActionOf(fetchNextTurn.request)), concatMap(action => {
        service.loadingCounterService.initLoadingCounter();
        return service.loadingCounterService.loaingCounter
    }),
    tap(n => log(`timer is ${n}`)),
    map(n => fetchPercentageReport(n)));

const stopLoadingCounterAction: Epic<AppActions, AppActions, IAppState, IDependencyServices> = (
    action$, store, service
) => action$.pipe(
    filter(action => isActionOf(fetchNextTurn.success)(action) || isActionOf(fetchNextTurn.failure)(action)), tap(action => {
        log(action.type);
        service.loadingCounterService.disposeLoadingCounter();
    }), filter(isActionOf(fetchNextTurn.success)), map(success => continueNext(success.payload)));


export default combineEpics(fetchAction, startLoadingCounterAction, stopLoadingCounterAction);