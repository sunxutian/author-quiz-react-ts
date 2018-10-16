import { action, createAsyncAction, createStandardAction, isActionOf} from 'typesafe-actions';
import * as constants from '../constants';

// export const selectBookAction = createAction<string>(constants.SELECT_BOOK);
// export const continueNextAction = createAction(constants.CONTINUTE_NEXT);

// export const { connextNext, selectBook } = createActions({
//     CONTINUTE_NEXT: () => ({ type: constants.CONTINUTE_NEXT }),
//     SELECT_BOOK: (bookAuthor: string) => ({ bookAuthor })
// });

export const selectBook = (bookAuthor: string) => action(constants.SELECT_BOOK, bookAuthor);
export const continueNext = () => action(constants.CONTINUTE_NEXT);

// export const selectBook2 = createStandardAction(constants.SELECT_BOOK).map(({ bookAuthor }: { bookAuthor: string }) => ({
//     payload: { bookAuthor, selected: true }
// }));

// export const selectBook3 = createAction(constants.SELECT_BOOK, resolve => {
//     return (bookAuthor: string) => resolve({bookAuthor, selected: true});
// });
