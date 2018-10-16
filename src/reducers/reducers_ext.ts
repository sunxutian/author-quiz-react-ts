import { combineReducers } from 'redux';
import { defaultState } from 'src/initState/InitState';
import { IAppState, IBookSelection, ITurnDataModel } from 'src/types';
import { ActionType, getType, StateType } from 'typesafe-actions';
import * as actions from '../actions';

export type AppActions = ActionType<typeof actions>;

const turnReducer = (state: ITurnDataModel = defaultState, action: AppActions): ITurnDataModel => {
    switch (action.type) {
        case getType(actions.selectBook):
            const books = state.books.map<IBookSelection>(b => ({ ...b, isCorrectAnswer: b.bookAuthor === state.author.name }));
            return { ...state, books, isCorrect: action.payload === state.author.name, isSelected: true };
        default:
            return state;
    }
};

const defaultAppState: IAppState = {
    next: () => defaultState,
    turnData: defaultState
}

export const appReducer = (state: IAppState = defaultAppState, action: AppActions): IAppState => {
    switch (action.type) {
        case getType(actions.selectBook):
            return { ...state, turnData: turnReducer(state.turnData, action) };
        case getType(actions.continueNext):
            return { ...state, turnData: state.next() };
        default:
            return state;
    }
};

export const combinedAppReducer = combineReducers<IAppState, AppActions>({
    next: (state, action) => state as () => ITurnDataModel,
    turnData: (state, action) => turnReducer(state, action)
})

export type rootState = StateType<typeof combinedAppReducer>