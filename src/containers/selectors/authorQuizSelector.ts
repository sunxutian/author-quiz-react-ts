import { createSelector } from 'reselect';
import { IAppState } from 'src/types';

const getError = (state: IAppState) => state.fetchError;
const getIsFeching = (state: IAppState) => state.isFetching;
const getLoadingProgress = (state: IAppState) => state.fetchPercentage;

export default createSelector(getError, getIsFeching, getLoadingProgress, (error, isFetching, loadingProgress) => {
    return {
        error,
        isFetching, 
        loadingProgress
    }
});