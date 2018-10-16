import { combineActions, handleAction, handleActions } from 'redux-actions';
import { defaultState, getTurnData } from 'src/initState/InitState';
import { ITurnDataModel } from 'src/types';
import * as constants from '../constants';


export const selectBookReducer = handleAction<ITurnDataModel, string>(constants.SELECT_BOOK,
    (state, action) => {
        const books = state.books
            .map(b => ({ ...b, isCorrectAnswer: b.bookAuthor === state.author.name }));
        return { ...state, books, isSelected: true, isCorrect: action.payload === state.author.name };
    },
    defaultState);

export const continueNextReducer = handleAction<ITurnDataModel, {}>(constants.CONTINUTE_NEXT,
    (state, action) => getTurnData(), defaultState);


export const reducers = handleActions<ITurnDataModel, string>({
    CONTINUTE_NEXT: (state, action) => getTurnData(),
    SELECT_BOOK: (state, action) => {
        const books = state.books
            .map(b => ({ ...b, isCorrectAnswer: b.bookAuthor === state.author.name }));
        return { ...state, books, isSelected: true, isCorrect: action.payload === state.author.name };
    }
}, defaultState);
