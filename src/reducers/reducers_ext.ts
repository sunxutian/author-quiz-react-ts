import { combineReducers } from 'redux';
import { IAppState, IBookSelection, ITurnProps } from 'src/types';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initState } from '../initState/InitState';

export type AppActions = ActionType<typeof actions>;

const turnReducer = (state: ITurnProps, action: AppActions): ITurnProps => {
    switch (action.type) {
        case getType(actions.selectBook):
            const bookSelections = state.bookSelections.map<IBookSelection>(b => ({ ...b, isCorrectAnswer: b.bookAuthor === state.author.name }));
            return { ...state, bookSelections, isCorrect: action.payload === state.author.name, isSelected: true };
        case getType(actions.continueNext):
            return { ...state, ...action.payload };
        default:
            return state;
    }
};


export const combinedAppReducer = combineReducers<IAppState, AppActions>({
    fetchError: (state, action) => {
        switch (action.type) {
            case getType(actions.fetchNextTurn.failure):
                return action.payload;
            default:
                return null;
        }
    },
    fetchPercentage: (state = 0, action) => {
        switch (action.type) {
            case getType(actions.fetchPercentageReport):
                return action.payload;
            case getType(actions.continueNext):
                return 0;
            default:
                return state;
        }
    },
    isFetching: (state = false, action) => {
        switch (action.type) {
            case getType(actions.fetchNextTurn.request):
                return true;
            case getType(actions.fetchNextTurn.success):
            case getType(actions.fetchNextTurn.failure):
                return false;
            default:
                return state;
        }
    },
    turnData: (state = initState, action) => turnReducer(state, action)
})
