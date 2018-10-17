import { combineReducers } from 'redux';
import { getTurnData } from 'src/initState/InitState';
import { IAppState, IBookSelection, ITurnProps } from 'src/types';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions';

export type AppActions = ActionType<typeof actions>;
const defaultState = getTurnData();

const defaultAppState: IAppState = {
    next: () => defaultState,
    turnData: defaultState
}

const turnReducer = (state: ITurnProps = defaultState, action: AppActions): ITurnProps => {
    switch (action.type) {
        case getType(actions.selectBook):
            const bookSelections = state.bookSelections.map<IBookSelection>(b => ({ ...b, isCorrectAnswer: b.bookAuthor === state.author.name }));
            return { ...state, bookSelections, isCorrect: action.payload === state.author.name, isSelected: true };
        default:
            return state;
    }
};

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
    next: (state = () => defaultState, action) => state as () => ITurnProps,
    turnData: (state = defaultState, action) => turnReducer(state, action)
})
